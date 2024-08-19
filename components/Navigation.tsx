'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import styled from 'styled-components';
import styles from './styles/Navigation.module.css';

export default function Navigation() {
    const path = usePathname();
    const isHome = path === '/';
    const isAbout = path === '/about';
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/" className={isHome ? styles.active : ''}>
                        {isHome && '🏠'}
                        Home
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        href="/about"
                        className={isAbout ? styles.active : ''}
                    >
                        {isAbout && '✨'}
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

// const Nav = styled.nav`
//     border-bottom: 1px solid #eee;
//     margin-bottom: 20px;
//     ul {
//         display: flex;
//         gap: 12px;
//         margin: 20px;
//         li {
//             list-style: none;
//             border: 1px solid #ddd;
//             border-radius: 8px;
//             a {
//                 display: block;
//                 width: 100%;
//                 height: 100%;
//                 padding: 10px 20px;
//             }
//         }
//     }
// `;
