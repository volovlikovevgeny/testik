import React, { ReactElement } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import styles from './modal.module.scss';

export interface ModalInterface {
    showModal: boolean;
    setShowModal: () => void;
}

const Modal = ({ showModal, setShowModal }: ModalInterface): ReactElement => {
    return (
        <>
            {showModal ?
                <div className={styles.background}>
                    <div className={styles.modal_wrapper}>
                        <div className={styles.modal_content}>
                            <h1>Are you ready?</h1>
                            <p>Get exclusive access to our next launch.</p>
                            <button>Join Now</button>
                            <CloseIcon className={styles.closeModalbtn} />
                        </div>
                    </div>
                </div>
                : null}
        </>
    );
};

export default Modal;
