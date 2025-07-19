import React, { useState } from 'react';
import styles from './Toolbar.module.css';
import Category from './Category';

const categories = [
    {
        title: 'База знаний',
        icon: '📚',
        items: [
            'Категория 1',
            {
                title: 'Категория 2',
                items: ['Подкатегория 2.1', 'Подкатегория 2.2'],
            },
            'Категория 3',
        ],
    },
    {
        title: 'Обращения',
        icon: '💬',
        items: ['Обращение 1', 'Обращение 2', 'Обращение 3'],
    },
];

export default function Toolbar() {
    const [isOpenToolbar, setIsOpenToolBar] = useState(true);

    return (
        <div className={`${styles.container} ${isOpenToolbar ? styles.open : styles.close}`}>
            <button
                className={styles.toggleButton}
                onClick={() => setIsOpenToolBar(prev => !prev)}
                aria-label="Toggle toolbar"
            >
                {isOpenToolbar ? '◀' : '▶'}
            </button>

            <Category
                icon={categories[0].icon}
                title={categories[0].title}
                items={categories[0].items}
                isToolbarOpen={isOpenToolbar}
            />

            <Category
                icon={categories[1].icon}
                title={categories[1].title}
                items={categories[1].items}
                isToolbarOpen={isOpenToolbar}
            />
        </div>
    );
}
