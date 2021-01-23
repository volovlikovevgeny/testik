import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import Hello from '../../components/Hello/Hello';

const HomePage = (): ReactElement => {
    const router = useRouter();
    return (
    <>
        <Hello />
        <button onClick={()=>router.push('/list')}>to List Items</button>
    </>
    );
};


export default HomePage;
