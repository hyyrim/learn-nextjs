'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import styled from 'styled-components';

export default function Navigation() {
    const path = usePathname();
    console.log('🚀::', path);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home {path === '/' && '🏠'}</Link>
                </li>
                <li>
                    <Link href="/about">About {path === '/about' && '✨'}</Link>
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
