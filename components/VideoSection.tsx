
'use client';

import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative aspect-video w-full max-w-7xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden rounded-3xl md:rounded-[2.5rem] mt-8 mb-20 isolate transform-gpu">
        <video
          className="w-full h-full object-cover rounded-3xl md:rounded-[2.5rem]"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/photos/4818145/pexels-photo-4818145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <source 
            src="https://videos.pexels.com/video-files/4818145/4818145-hd_1920_1080_30fps.mp4" 
            type="video/mp4" 
          />
          Din webbläsare stöder inte video-taggen.
        </video>
        
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
    </section>
  );
};

export default VideoSection;
