"use client";

import React, { useEffect, useState } from "react";
import { Lock, Check, ShieldCheck, Ghost, Flame, Skull, Wand2 } from "lucide-react";

interface NotificationItem {
  name: string;
  action: string;
}

const firstNames = [
  "Adrian", "Brianna", "Caleb", "Delilah", "Ezra", "Freya", "Gavin", "Hazel", "Ian", "Jasmine",
  "Kai", "Leilani", "Miles", "Nora", "Oscar", "Piper", "Quinn", "Rowan", "Stella", "Tristan",
  "Uriah", "Violet", "Weston", "Ximena", "Yusuf", "Zoe", "Asher", "Brooke", "Colton", "Dahlia",
  "Emmett", "Fiona", "Graham", "Hadley", "Isaiah", "Juliet", "Kaden", "Lyla", "Milo", "Nina",
  "Orion", "Paige", "Ryder", "Sienna", "Tate", "Vera", "Xander", "Zara", "Holden", "Gemma"
];

const lastInitials = ["B.", "D.", "F.", "H.", "J.", "L.", "M.", "P.", "Q.", "V.", "X.", "Z.", "K.", "N.", "R."];

const actions = [
  "just claimed a spooky $250 Build-A-Bear card!",
  "just claimed a $250 Halloween voucher!",
  "just unlocked reward eligibility!",
  "just completed the review survey!",
  "just verified eligibility!"
];

const notifications: NotificationItem[] = Array.from({ length: 100 }, (_, i) => ({
  name: `${firstNames[(i * 7) % firstNames.length]} ${lastInitials[(i * 5) % lastInitials.length]}`,
  action: actions[i % actions.length]
}));

export default function AnnouncementBar() {
  const [currentNotif, setCurrentNotif] = useState<NotificationItem | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const showRandomNotif = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setCurrentNotif(notifications[randomIndex]);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 3500);
    };

    const initialTimer = setTimeout(() => {
      showRandomNotif();
    }, 1500);

    const interval = setInterval(() => {
      showRandomNotif();
    }, 7000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Top Banner Bar - Spooky Dark Purple Header */}
      <div 
        className="sticky top-0 z-50 w-full bg-[#180a29] border-b border-[#f97316]/30 pb-2 px-3 sm:px-4 shadow-lg backdrop-blur-md"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 24px)" }}
      >
        {/* Background Floating Spooky Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <Ghost 
            className="absolute left-[3%] sm:left-[7%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-purple-300 animate-bounce" 
            strokeWidth={1.5}
          />
          <Flame 
            className="absolute right-[3%] sm:right-[7%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-orange-400 animate-pulse" 
            strokeWidth={1.5}
          />
        </div>

        {/* Content Stack */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-xl mx-auto space-y-0.5">
          <div className="flex items-center justify-center gap-1.5 w-full text-center">
            <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0 -mt-0.5 animate-pulse" />
            <p className="text-white text-[9px] xs:text-[10px] sm:text-[11px] font-bold tracking-tight leading-none">
              256-Bit SSL Secured &bull; Over 1,400+ verified today
            </p>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-purple-200/90">
            <span className="text-[7.5px] xs:text-[8px] sm:text-[8.5px] uppercase tracking-wider font-semibold text-orange-300">
              SECURE ELIGIBILITY CHECK
            </span>
            <span className="text-orange-400/50 text-[7.5px]">&bull;</span>
            <div className="flex items-center gap-1 text-[7.5px] xs:text-[8px] sm:text-[8.5px] font-semibold text-purple-100">
              <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" strokeWidth={2.5} />
              <span className="uppercase tracking-wider">PRIVACY PROTECTED</span>
            </div>
          </div>
        </div>

        {/* Glowing Orange Line */}
        <div className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full opacity-80 overflow-hidden">
          <div className="absolute inset-0 bg-orange-300/60 animate-shine"></div>
        </div>
      </div>

      {/* Floating Social Proof Toast */}
      {currentNotif && (
        <div
          className={`fixed top-14 left-3 right-3 sm:left-4 sm:right-auto z-[9999] max-w-[340px] mx-auto sm:mx-0 flex items-center gap-2 rounded-full border border-purple-500/30 bg-[#12071f]/95 text-white backdrop-blur-md px-3 py-1.5 shadow-xl overflow-hidden transition-all duration-300 ease-in-out pointer-events-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange-500 text-slate-950">
            <Ghost className="w-2.5 h-2.5" strokeWidth={2.5} />
          </div>

          <div className="text-[9.5px] sm:text-[10.5px] text-purple-100 truncate leading-tight">
            <span className="font-bold text-orange-300">{currentNotif.name} </span>
            <span className="text-purple-200/80">{currentNotif.action}</span>
          </div>
        </div>
      )}
    </>
  );
}
