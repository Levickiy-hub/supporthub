// src/components/Hexagon.jsx
import React from 'react';

export default function Hexagon({ x, y, size = 50, fill = '#2196f3' }) {
    const width = Math.sqrt(3) * size;
    const height = 2 * size;
    const points = [
        [width / 2, 0],
        [width, size / 2],
        [width, size + size / 2],
        [width / 2, height],
        [0, size + size / 2],
        [0, size / 2],
    ]
        .map(([px, py]) => `${px + x},${py + y}`)
        .join(' ');

    return <polygon points={points} fill={fill} stroke="#0d47a1" strokeWidth="2" />;
}
