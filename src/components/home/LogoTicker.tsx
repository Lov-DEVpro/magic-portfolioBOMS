"use client";

import { Flex, Text } from "@once-ui-system/core";

const logos = [
  "PARTNER 1", "PARTNER 2", "PARTNER 3", "PARTNER 4", "PARTNER 5", "PARTNER 6",
  "PARTNER 1", "PARTNER 2", "PARTNER 3", "PARTNER 4", "PARTNER 5", "PARTNER 6"
];

export const LogoTicker = () => {
  return (
    <div style={{ 
      width: '100%', 
      overflow: 'hidden', 
      position: 'relative',
      padding: '20px 0'
    }}>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: fit-content;
          animation: ticker 20s linear infinite;
        }
        .ticker-item {
          flex: 0 0 auto;
          width: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 20px;
          opacity: 0.5;
          filter: grayscale(1);
          transition: all 0.3s ease;
        }
        .ticker-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }
      `}</style>
      <div className="ticker-track">
        {logos.map((logo, i) => (
          <div key={i} className="ticker-item">
            <Text variant="label-strong-l" onBackground="neutral-weak">
              {logo}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};
