import React, { useMemo } from "react";
import "./OnePieceBg.css";   

export default function OnePieceBg({ children }) {
  
  const confetti = useMemo(() =>
    Array.from({ length: 25 }).map((_, i) => {
      const startX = Math.random() * 100 + "vw";
      const endX   = Math.random() * 100 + "vw";
      const time   = 10 + Math.random() * 10 + "s";  
      const delay  = -(Math.random() * 20) + "s";    
      return (
        <div
          key={i}
          className="confetti"
          style={{
            "--startX": startX,
            "--endX": endX,
            "--time": time,
            animationDelay: delay,
          }}
        />
      );
    }), []);  // ← empty deps = run once

  return (
    <div className="onepiece-bg">
      {confetti}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}