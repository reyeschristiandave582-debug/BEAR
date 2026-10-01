"use client";

import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

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
  "just claimed a $250 Build-A-Bear card!",
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
      {/* Floating Social Proof Toast */}
      {currentNotif && (
        <div
          className={`fixed top-4 left-3 right-3 sm:left-4 sm:right-auto z-[9999] max-w-[350px] mx-auto sm:mx-0 flex items-center gap-2.5 rounded-full border border-purple-300 bg-[#2d124d] text-white px-3.5 py-2 shadow-2xl transition-all duration-300 ease-in-out pointer-events-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-slate-950">
            <Check className="w-3 h-3 text-slate-950" strokeWidth={3} />
          </div>

          <div className="text-[10px] sm:text-[11px] text-white truncate leading-tight">
            <span className="font-extrabold text-orange-300">{currentNotif.name} </span>
            <span className="text-purple-100">{currentNotif.action}</span>
          </div>
        </div>
      )}
    </>
  );
}
