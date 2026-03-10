'use client';

import { useEffect, useRef, useState } from 'react';

interface SplineSceneProps {
    /** URL to the Spline scene (.splinecode file) */
    scene: string;
    /** CSS class to apply to the Spline canvas */
    className?: string;
}

/**
 * A highly stable custom Spline scene component for Next.js.
 * This utilizes the Vanilla JS `@splinetool/runtime` to render directly onto a canvas.
 * It bypasses Next.js 15 SSR conflicts and avoids the 403 Forbidden iframe endpoint issues.
 */
export function SplineScene({ scene, className }: SplineSceneProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        let app: any = null;

        // If no scene is provided, immediately set error state
        if (!scene || scene.trim() === '') {
            setHasError(true);
            setIsLoading(false);
            return;
        }

        // Dynamically import the runtime to avoid SSR WebGL errors
        import('@splinetool/runtime').then(({ Application }) => {
            if (canvasRef.current) {
                try {
                    app = new Application(canvasRef.current);
                    app.load(scene).then(() => {
                        setIsLoading(false);
                    }).catch((err: any) => {
                        // Suppress the noisy buffer error from the console
                        setHasError(true);
                        setIsLoading(false);
                    });
                } catch (e) {
                    setHasError(true);
                    setIsLoading(false);
                }
            }
        }).catch(() => {
            setHasError(true);
            setIsLoading(false);
        });

        // Cleanup the Spline app when component unmounts
        return () => {
            if (app) {
                app.dispose(); // Spline API to cleanup canvas memory
            }
        };
    }, [scene]);

    // If the Spline URL is invalid or returns 403, show a graceful fallback instead of crashing
    if (hasError) {
        return (
            <div className={`relative flex items-center justify-center bg-slate-50/50 rounded-3xl border border-slate-100 ${className || 'w-full h-full'}`}>
               <p className="text-sm font-medium text-slate-400 text-center px-4">
                  3D Scene unavailable.<br/>Please provide a valid public Spline URL.
               </p>
            </div>
        );
    }

    return (
        <div className={`relative ${className || 'w-full h-full'}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10">
                    <div className="w-10 h-10 border-4 border-slate-200 border-t-brand-green rounded-full animate-spin" />
                </div>
            )}
            <canvas 
                ref={canvasRef} 
                className="w-full h-full absolute inset-0 outline-none" 
            />
        </div>
    );
}

function LoadingSpinner() {
    return (
        <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
            <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
            <style jsx>{`
                @keyframes spline-spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
