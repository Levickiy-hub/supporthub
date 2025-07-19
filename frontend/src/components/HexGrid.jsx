// src/components/HexGrid.jsx
import React from 'react';
import Hexagon from './Hexagon';
import styles from  './HexGrid.module.css';

export default function HexGrid({ rows = 10, cols = 50, size = 50 }) {
    const hexWidth = Math.sqrt(3) * size;
    const hexHeight = 2 * size;
    const verticalSpacing = (3 / 4) * hexHeight;

    const hexes = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * hexWidth + (row % 2 === 1 ? hexWidth / 2 : 0);
            const y = row * verticalSpacing;

            hexes.push(<Hexagon key={`${row}-${col}`} x={x} y={y} size={size} />);
        }
    }

    const svgWidth = cols * hexWidth + hexWidth / 2;
    const svgHeight = rows * verticalSpacing + size;

    return (
            <svg width={svgWidth} height={svgHeight} className={styles.wrapper}>
                {hexes}
            </svg>
    );
}
