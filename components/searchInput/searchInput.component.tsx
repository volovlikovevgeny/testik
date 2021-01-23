import React, { ReactElement } from 'react';
import SearchRounded from '@material-ui/icons/SearchRounded';
import styles from './searchInput.module.scss';

export interface searchInputInterface {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ ...rest }: searchInputInterface): ReactElement => {
    return (
        <div className={styles.wrapper}>
            <SearchRounded />
            <input className={styles.input} {...rest}></input>
        </div>
    );
};


export default SearchInput;
