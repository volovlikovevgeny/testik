import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Modal from '../modal/modal';
import styles from './navbar.module.scss';


const linkItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Contact', link: '/contact' },
    { id: 3, title: 'About', link: '/about' },
    { id: 4, title: 'Category', link: '/category'},
    { id: 5, title: 'Sign Up', link: '/signin' },
    { id: 6, title: 'Countries', link: '/country' },
];


export interface NavbarInterface {
    isOpen: boolean;
    toggle: () => void;
}

const Navbar = ({ toggle }: NavbarInterface): ReactElement => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navbar_container}>
                    <div className={styles.nav_logo}><FingerprintIcon fontSize='large' /></div>
                    <div className={styles.mobile_icon}>
                        <MenuIcon fontSize='large' onClick={toggle} />
                    </div>

                    <ul className={styles.nav_menu}>
                        {
                            linkItems.map(({ id, title, link }) => (
                                <li key={id} className={styles.nav_item}>
                                    <Link href={`${link}`}>
                                        <a className={styles.nav_links}>{title.toUpperCase()}</a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={styles.nav_btn}>
                        <div
                            onClick={openModal}
                            className={styles.nav_btn_link}>
                            Sign In
                        </div>
                    </div>
                </div>
            </nav>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
};


export default Navbar;
