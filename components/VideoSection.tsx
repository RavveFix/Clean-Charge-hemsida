
'use client';

import React, { useEffect, useRef, useState } from 'react';
import useReducedMotion from '@/lib/useReducedMotion';

const VIDEO_POSTER = '/images/hero/charging-video-poster-1280.jpg';
const lazyVideoAttribute = { loading: 'lazy' } as React.VideoHTMLAttributes<HTMLVideoElement> & {
  loading: 'lazy';
};

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [showStaticPoster, setShowStaticPoster] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }

        if (prefersReducedMotion) {
          setShowStaticPoster(true);
          video.pause();
          video.currentTime = 0;
          return;
        }

        setShowStaticPoster(false);
        if (!video.poster) video.poster = VIDEO_POSTER;
        video.preload = 'metadata';
        void video.play().catch(() => {
          // Autoplay may be blocked by the browser; the poster remains visible.
        });
      },
      { rootMargin: '300px 0px' },
    );

    video.preload = 'none';
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [prefersReducedMotion]);
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative aspect-video w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="relative h-full w-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] mt-4 sm:mt-8 mb-12 sm:mb-20 isolate transform-gpu">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-3xl md:rounded-[2.5rem]"
          loop
          muted
          playsInline
          preload="none"
          {...lazyVideoAttribute}
        >
          <source
            src="https://videos.pexels.com/video-files/4818145/4818145-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Din webbläsare stöder inte video-taggen.
        </video>

        {showStaticPoster && (
          <img
            src={VIDEO_POSTER}
            alt=""
            width={1280}
            height={720}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20 pointer-events-none" />
        
        {/* Subtle Brand Accent */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">Live Experience</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default VideoSection;
