'use client';

import React, {JSX, useEffect, useState} from 'react';

const Snowfall: React.FC = () => {
    const [flakes, setFlakes] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const generateFlakes = () => {
            const flakeArray: JSX.Element[] = [];

            for (let i = 0; i < 50; i++) {
                const size = (Math.random() + 0.2).toFixed(2); // vw
                const left = Math.random() * 100; // vw
                const leftIni = (Math.random() * 20 - 10).toFixed(2); // vw
                const leftEnd = (Math.random() * 20 - 10).toFixed(2); // vw
                const duration = (5 + Math.random() * 10).toFixed(2); // s
                const delay = (-Math.random() * 10).toFixed(2); // s
                const isBlurred = i % 6 === 0;

                flakeArray.push(
                    <div
                        key={i}
                        className={`absolute top-[-5vh] rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 ${
                            isBlurred ? 'blur-sm' : ''
                        }`}
                        style={{
                            width: `${size}vw`,
                            height: `${size}vw`,
                            left: `${left}vw`,
                            animation: `snowfall ${duration}s linear infinite`,
                            animationDelay: `${delay}s`,
                            '--left-ini': `${leftIni}vw`,
                            '--left-end': `${leftEnd}vw`,
                        } as React.CSSProperties}
                    />
                );
            }

            setFlakes(flakeArray);
        };

        generateFlakes();
    }, []);

    return (
        <div>
            {flakes}
            <style jsx>{`
            @keyframes snowfall {
              0% {
                transform: translate3d(var(--left-ini), 0, 0);
              }
              100% {
                transform: translate3d(var(--left-end), 110vh, 0);
              }
            }
          `}</style>
        </div>
    );
};

export default Snowfall;
