import React, { ReactElement, useState } from 'react';
import Navbar from '../navigation/navbar.component';
import Sidebar from '../sidebar/sidebar';
import Head from 'next/head';

export interface LayoutInterface {
    children: React.ReactChild,
    title?: string
}

export default function Layout({
    children,
    title = 'This is the default title' }: LayoutInterface): ReactElement {

    const [open, isOpen] = useState<boolean>(false);

    const toggle = () => {
        isOpen(!open);
    };
    
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <Sidebar toggle={toggle} open={open}  />
                <Navbar isOpen={open} toggle={toggle} />
            </header>

            {children}

            <footer>{'I`m here to stay footer'}</footer>
        </div>
    );
}
