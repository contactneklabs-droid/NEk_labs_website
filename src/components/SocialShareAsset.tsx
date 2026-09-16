import React, { forwardRef } from 'react';
import Image from 'next/image';

const SocialShareAsset = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute top-0 flex flex-col bg-black text-white"
      style={{
        width: '1080px',
        height: '1920px',
        left: '-20000px', // Safely off-screen
        fontFamily: 'var(--font-inter), sans-serif',
        // Subtle dotted background pattern
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 2px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0',
      }}
    >
      {/* Heavy Brutalist Border */}
      <div className="flex-1 m-8 border-4 border-white/20 relative flex flex-col p-16 justify-between">
        
        {/* Top Header */}
        <div className="flex justify-between items-start uppercase tracking-widest text-2xl font-bold">
          <div>NEk LABS</div>
          <div>↗</div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center mt-32">
          {/* Profile Photo Wrapper */}
          <div className="w-80 h-80 bg-zinc-900 border-2 border-white/20 mb-16 relative overflow-hidden grayscale">
            <Image 
              src="https://res.cloudinary.com/wak9cipn/image/upload/v1789490961/ChatGPT_Image_Aug_14_2026_11_09_51_PM.png"
              alt="Bharath Chavan"
              fill
              className="object-cover"
              crossOrigin="anonymous" // Critical for Canvas rendering
            />
          </div>

          <h1 className="text-[120px] font-black tracking-tighter leading-none mb-8">
            NEk
          </h1>
          <h2 className="text-4xl font-light tracking-[0.2em] text-zinc-400 mb-8 uppercase">
            Founder / Builder
          </h2>
          
          <div className="w-24 h-1 bg-white mb-8"></div>
          
          <p className="text-3xl font-bold tracking-widest uppercase">
            Web • AI • Automation
          </p>
        </div>

        {/* Bottom Section - Reserved for Link Sticker */}
        <div className="mt-auto pt-16 border-t-2 border-white/20">
          <div className="flex flex-col items-center justify-center space-y-4 mb-32">
            <p className="text-3xl font-black uppercase tracking-widest">
              TAP TO VISIT ↗
            </p>
            <p className="text-2xl text-zinc-500 font-medium uppercase tracking-widest">
              NEk LABS
            </p>
          </div>
          
          {/* Visual Safe Zone Box for Link Sticker (Optional subtle outline to suggest placement) */}
          <div className="w-[600px] h-[180px] mx-auto border-2 border-dashed border-white/30 rounded-2xl flex items-center justify-center opacity-50">
            <p className="text-xl text-zinc-500 uppercase tracking-widest font-mono">
              [ PLACE LINK STICKER HERE ]
            </p>
          </div>
        </div>

        {/* Absolute Footer */}
        <div className="absolute bottom-16 left-16 right-16 flex justify-between text-xl text-zinc-600 font-mono tracking-widest uppercase">
          <div>2026</div>
          <div>FOUNDER · BUILDER · CREATOR</div>
        </div>
      </div>
    </div>
  );
});

SocialShareAsset.displayName = 'SocialShareAsset';
export default SocialShareAsset;
