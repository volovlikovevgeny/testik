import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './countries-table.module.scss';

const CountriesTable = ({ countries }): ReactElement => {
    console.log(countries);

    return (
        <React.Fragment>
            <div className={styles.countries_menu}>
                {
                    countries.map((country: { flag: string; name: React.ReactNode; }, index: number) => (
                        <Link key={index} href={`country/singlecountry/${country.alpha3Code}`}>
                            <div className={`${styles.menu_item}`}>
                                <div
                                    className={styles.background_image}
                                    style={{
                                        backgroundImage: `url(${country.flag})`,
                                    }}
                                />

                                <div className={styles.content}>
                                    <h1 className={styles.title}>{country.name}</h1>
                                    <span className={styles.subtitle}>SEE MORE</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </React.Fragment>
    );
};

export default CountriesTable;
