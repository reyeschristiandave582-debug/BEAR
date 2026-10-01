import React from 'react';
import { Ghost, Pumpkin, Skull, Spider, Wand2, Sparkles } from 'lucide-react';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <>
      {/* Central Mask - Spooky Dark Midnight Vignette */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(18,7,31,0.92) 0%, rgba(13,5,22,0.97) 50%, rgba(8,2,14,1) 100%)'
        }}
      />

      {/* Vector Icon Overlays - Spooky Floating Halloween Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-25 z-0">
        <Ghost className="absolute top-16 left-3 w-6 h-6 text-purple-300 animate-rotate-slow" />
        <Pumpkin className="absolute top-44 left-4 w-6 h-6 text-orange-400 animate-float-spin" />
        <Sparkles className="absolute top-28 right-4 w-6 h-6 text-amber-300 animate-twinkle" />
        <Skull className="absolute bottom-36 left-4 w-6 h-6 text-purple-200 animate-rotate-reverse" />
        <Spider className="absolute bottom-52 right-4 w-6 h-6 text-orange-500 animate-float-gentle" />
        <Wand2 className="absolute top-[60%] left-2 w-6 h-6 text-amber-400 animate-rotate-slow" />
        <Ghost className="absolute top-[40%] right-3 w-6 h-6 text-purple-300 animate-float-spin" />
      </div>

      {/* Image Overlays - Edge Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.12] z-0">
        <Image
          src="https://i.imgur.com/PYS9voZ.png"
          alt=""
          width={100}
          height={100}
          quality={100}
          className="absolute top-12 left-2 w-14 h-14 object-contain animate-float-gentle delay-1000"
        />
        <Image
          src="https://i.imgur.com/nhNXZtC.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute top-24 right-2 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/NXdv9ue.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute top-[42%] left-2 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/5f3sEmh.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute top-[78%] right-2 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/ajoPUk9.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute bottom-20 left-3 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/ZLM3E3T.png"
          alt=""
          width={80}
          height={80}
          quality={100}
          className="absolute bottom-12 right-3 w-14 h-14 object-contain animate-float-gentle"
        />
      </div>
    </>
  );
};

export default AnimatedBackground;
