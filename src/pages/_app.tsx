import React, { FC } from 'react';
import Layout from '../../components/layout/layout.component';
import { AppProps } from 'next/app';
import '../../styles/global.styles.scss';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default WrappedApp;


