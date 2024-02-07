import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Login Seed',
    description: 'Login Seed',
};

interface IRootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = (props: IRootLayoutProps) => {
    const { children } = props;
    return (
        <html lang="pt">
            <body className={inter.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
