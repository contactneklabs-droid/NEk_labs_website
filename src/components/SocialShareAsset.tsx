import React, { forwardRef } from 'react';

const SocialShareAsset = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 flex flex-col items-center justify-center pointer-events-none"
      style={{
        width: '1080px',
        height: '1920px',
        zIndex: -9999,
        opacity: 0.001, // Keep in render tree but invisible
        fontFamily: 'var(--font-inter), sans-serif',
        backgroundColor: '#E5E5E5', // Light gray background like the reference
      }}
    >
      {/* The Floating Card */}
      <div 
        className="w-[900px] h-[1500px] bg-[#111111] rounded-[60px] flex flex-col p-16 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden text-white"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 3px, transparent 3px)',
          backgroundSize: '48px 48px',
          backgroundPosition: '0 0',
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-24">
          <div className="flex items-center gap-4">
            <span className="text-5xl font-black tracking-tighter">NEk.</span>
          </div>
          <div className="border border-white/20 px-6 py-3 rounded-2xl text-2xl font-medium tracking-wide">
            Save ↗
          </div>
        </div>

        {/* Title Area */}
        <div className="flex items-center gap-6 mb-8 text-zinc-400 text-3xl font-medium tracking-widest uppercase">
          <span>NEk LABS</span>
          <span>•</span>
          <span>2026</span>
        </div>
        
        <h1 className="text-[110px] font-bold tracking-tight leading-none mb-12">
          Bharath Chavan
        </h1>

        {/* Tags */}
        <div className="flex gap-4 mb-24">
          <div className="bg-[#222222] border border-white/10 px-8 py-4 rounded-2xl text-2xl font-medium tracking-wide">
            Founder
          </div>
          <div className="bg-[#222222] border border-white/10 px-8 py-4 rounded-2xl text-2xl font-medium tracking-wide">
            Builder
          </div>
          <div className="bg-[#222222] border border-white/10 px-8 py-4 rounded-2xl text-2xl font-medium tracking-wide">
            Web • AI • Automation
          </div>
        </div>

        {/* Profile Picture (using standard img for html2canvas reliability) */}
        <div className="flex-1 flex justify-center items-center mb-12">
           <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-white/10 grayscale">
              <img 
                src="https://res.cloudinary.com/wak9cipn/image/upload/f_auto,q_auto/v1789490961/ChatGPT_Image_Aug_14_2026_11_09_51_PM.png" 
                alt="Profile"
                crossOrigin="anonymous"
                className="w-full h-full object-cover"
              />
           </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto border-t border-white/20 pt-16 flex justify-between items-end">
          <div>
            <p className="text-[60px] font-bold leading-none mb-4 tracking-tight">NEk LABS</p>
            <p className="text-3xl text-zinc-400 font-medium tracking-wide">Digital Systems & Automation</p>
          </div>
          
          <div className="bg-white text-black px-12 py-8 rounded-[24px] text-4xl font-bold tracking-tight">
            Tap to visit
          </div>
        </div>
      </div>
      
      {/* Explicit Link Sticker placement text outside the card for the story */}
      <div className="mt-16 text-3xl text-zinc-500 font-mono tracking-widest">
        [ PLACE LINK STICKER HERE ]
      </div>
    </div>
  );
});

SocialShareAsset.displayName = 'SocialShareAsset';
export default SocialShareAsset;
