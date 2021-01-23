import React, { ReactElement } from 'react';
import Link from 'next/link';
import CloseIcon from '@material-ui/icons/Close';
import styles from './sidebar.module.scss';

export interface SidebarInterface {
    open: boolean;
    toggle: () => void;
}

const linkItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Contact', link: '/contact' },
    { id: 3, title: 'About', link: '/about' },
    { id: 4, title: 'Sign Up', link: '/signin' },
];


const Sidebar = ({ toggle, open }: SidebarInterface): ReactElement => {
    return (
        <aside className={styles.sidebar_container} style={open ? { opacity: '100%', top: '0' } : { opacity: '0', top: '-100%' }}>
            <div className={styles.icon} onClick={toggle} >
                <CloseIcon fontSize='large' className={styles.close_icon} />
            </div>
            <div className={styles.sidebar_wrapper}>
                <ul className={styles.sidebar_menu}>
                    {
                         linkItems.map(({ id, title, link }) => (                   
                                <Link key={id} href={`${link}`}>
                                    <a onClick={toggle} className={styles.sidebar_link}>{title.toUpperCase()}</a>
                                </Link>
                        ))
                    }
                </ul>
                <div className={styles.sidebtn_wrap}>
                    <div onClick={toggle} className={styles.sidebar_route}>Sign In</div>
                </div>
            </div>
        </aside>
    );
};
export default Sidebar;
