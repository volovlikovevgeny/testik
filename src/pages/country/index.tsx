import React, { ReactElement, useState } from 'react';
import { GetServerSideProps } from 'next';
import SearchInput from '../../../components/searchInput/searchInput.component';
import CountriesTable from '../../../components/countries-table/countries-table.component';
import styles from './country.module.scss';

export const Country = ({ Countries }): ReactElement => {

    const [keyword, setKeyword] = useState<string>("");

    const filteredCountries = Countries.filter((country) => (
        country.name.toLowerCase().includes(keyword) ||
        country.region.toLowerCase().includes(keyword) ||
        country.subregion.toLowerCase().includes(keyword)
    ));

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setKeyword(e.target.value);
    };

    return (
        <React.Fragment>
            <div className={styles.inputContainer}>
                <div className={styles.counts}>Found: {Countries.length} countries</div>
                <div className={styles.input}>
                    <SearchInput
                        placeholder='Type Name, Region, or SubRegion'
                        onChange={onInputChange}
                    />
                </div>
            </div>

            <CountriesTable countries={filteredCountries} />
        </React.Fragment>
    );
};


export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const Countries = await response.json();

    return {
        props: {
            Countries,
        },
    };
};


export default Country;


