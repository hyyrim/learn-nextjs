import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../../components/Navigation';
// import StyledComponentsRegistry from '../../lib/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en">
                {/*<StyledComponentsRegistry>*/}
                <body className={inter.className}>
                    <Navigation />
                    {children}
                </body>
                {/*</StyledComponentsRegistry>*/}
            </html>
        </>
    );
}
