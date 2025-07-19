import React from 'react';
import HexGrid from '@/components/HexGrid';
import styles from './HomePage.module.css';

// const systemsMock = [
//     { id: 'sys1', name: 'Система 1' },
//     { id: 'sys2', name: 'Система 2' },
//     { id: 'sys3', name: 'Система 3' },
//     { id: 'sys4', name: 'Система 4' },
//     { id: 'sys5', name: 'Система 5' },
// ];


export default function HomePage() {

    return (
        <div className={styles.container}>
            <HexGrid/>
        </div>
    );
}
