import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

const SingleCountry = ({country}): ReactElement => {
    return (
        <div>
            {JSON.stringify(country)}
            <div>Hello World</div>
        </div>
    );
};


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
    const country = await response.json();

    return {
        props: {
            country,
        },
    };
};



export default SingleCountry;

