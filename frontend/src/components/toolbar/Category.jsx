import React, { useState } from 'react';
import styles from './Category.module.css';

export default function Category({ icon, title, items = [], isToolbarOpen }) {
    const [isOpen, setIsOpen] = useState(false);

    const renderItem = (item, index) => {
        if (typeof item === 'string') {
            return (
                <li key={index} className={styles.dropdownItem}>
                    {item}
                </li>
            );
        } else if (typeof item === 'object' && item !== null) {
            return (
                <li key={index} className={styles.dropdownItem}>
                    <Category
                        icon={item.icon || '📁'}
                        title={item.title}
                        items={item.items}
                        isToolbarOpen={isToolbarOpen}
                    />
                </li>
            );
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className={`${styles.toggleButton} ${isToolbarOpen ? styles.open : styles.close}`}
                aria-expanded={isOpen}
            >
                {icon}
                <span>{`${isOpen ? '▼' : '▶'} ${title}`}</span>
            </button>

            {isToolbarOpen && isOpen && (
                <ul className={styles.list}>
                    {items.map((item, index) => renderItem(item, index))}
                </ul>
            )}
        </div>
    );
}
