import React, { useEffect } from 'react'

function Baloons() {
    const random = (num) => Math.floor(Math.random() * num);

    const getRandomStyles = () => {
        const r = random(255);
        const g = random(255);
        const b = random(255);
        const mt = random(200);
        const ml = random(50);
        const dur = random(5) + 5;

        return {
            backgroundColor: `rgba(${r},${g},${b},0.7)`,
            color: `rgba(${r},${g},${b},0.7)`,
            boxShadow: `inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7)`,
            margin: `${mt}px 0 0 ${ml}px`,
            animation: `float ${dur}s ease-in infinite`
        };
    };

    const createBalloons = (num) => {
        const balloons = [];
        for (let i = num; i > 0; i--) {
            balloons.push(<div key={i} className="balloon" style={getRandomStyles()} />);
        }
        return balloons;
    };

    useEffect(() => {
        createBalloons(30);
    }, []);

    return (
        <div id="balloon-container">
            
            {createBalloons(30)}
        </div>
    );
}

export default Baloons
