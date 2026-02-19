
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      <div className="relative aspect-video w-full max-w-[2000px] mx-auto shadow-2xl overflow-hidden md:rounded-[2.5rem] md:my-20">
        <video
          className="w-full h-full object-cover"
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
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-cc-green animate-pulse" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
