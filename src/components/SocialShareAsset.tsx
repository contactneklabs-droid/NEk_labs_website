import React, { forwardRef } from 'react';

interface SocialShareAssetProps {
  isFlipped?: boolean; // If true, renders the back face instead of the front face
}

const SocialShareAsset = forwardRef<HTMLDivElement, SocialShareAssetProps>(({ isFlipped = false }, ref) => {
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
        backgroundColor: '#000000', // Solid black background perfectly matches the website
      }}
    >
      {/* The Exact Card Replica, scaled up for Instagram Story resolution */}
      <div 
        className="relative flex flex-col shadow-[0_50px_100px_-20px_rgba(255,255,255,0.1)] rounded-3xl"
        style={{
          width: '360px',
          height: '580px',
          transform: 'scale(2.2)', // Scale up to fill the story nicely
          transformOrigin: 'center center',
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.1)',
          overflow: 'hidden'
        }}
      >
        {!isFlipped ? (
          <>
            {/* ===================== FRONT FACE REPLICA ===================== */}
            {/* Cover Image Area */}
            <div className="h-[220px] bg-black relative w-full flex items-center justify-center border-b border-white/5">
              <div className="relative h-28 w-56 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://res.cloudinary.com/wak9cipn/image/upload/f_auto,q_auto/v1789845061/WhatsApp_Image_2026-09-20_at_00.40.34.jpg"
                  alt="NEk LABS"
                  style={{ objectFit: 'contain', transform: 'scale(1.25)', opacity: 0.9, width: '100%', height: '100%' }}
                />
              </div>

              {/* Social Icons (Static for image) */}
              <div className="absolute bottom-4 right-6 flex items-center gap-4 text-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="absolute top-[170px] left-6 w-24 h-24 bg-black border-[2px] border-[#333] rounded-full flex items-center justify-center overflow-hidden z-10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/wak9cipn/image/upload/f_auto,q_auto/v1789490948/IMG_9303-3.jpg"
                alt="Profile Picture"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Bottom Content Area */}
            <div className="flex-1 p-6 pt-4 flex flex-col justify-between text-white">
              {/* Action Buttons */}
              <div className="flex justify-end items-center gap-3">
                <div className="h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                </div>
                <div className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm">
                  Book A Meet
                </div>
              </div>

              {/* Name & Handle */}
              <div className="mt-4">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-xl font-bold text-white tracking-tight leading-none">NEk. | Bharath chavan</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#3b82f6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.76 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <p className="text-zinc-400 font-medium text-sm mt-1">@nek_labs</p>
              </div>

              {/* Bio */}
              <p className="text-zinc-400 text-[13px] leading-relaxed mt-4">
                NEk LABS is a digital studio where technology levels up like an overpowered anime protagonist and the web is just another playground for automation and high-end aesthetics.
              </p>

              {/* Titles */}
              <div className="flex items-center mt-6">
                <span className="font-black text-white text-[13px] tracking-widest uppercase">FOUNDER · BUILDER · CREATOR</span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* ===================== BACK FACE REPLICA ===================== */}
             <div className="w-full h-full bg-[#111] flex flex-col p-6 items-center justify-center text-white">
                <h3 className="text-white font-bold text-xl mb-2 tracking-tight">Scan to Connect</h3>
                <p className="text-zinc-400 text-sm mb-8 text-center px-4">Point your camera at the QR code to open the NEk LABS portal.</p>
                
                <div className="bg-white p-4 rounded-xl shadow-lg mb-8 h-[182px] w-[182px] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://neklabs.com/bharath`} alt="QR Code" width={150} height={150} />
                </div>

                <div className="bg-white text-black w-full py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Save to Contacts
                </div>
              </div>
          </>
        )}
      </div>
      
      {/* Link Sticker prompt */}
      <div className="mt-48 text-2xl text-zinc-600 font-mono tracking-widest uppercase">
        [ PLACE LINK STICKER HERE ]
      </div>
    </div>
  );
});

SocialShareAsset.displayName = 'SocialShareAsset';
export default SocialShareAsset;
