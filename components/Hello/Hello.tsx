import styles from './Hello.module.scss';
import React, { ReactElement } from 'react';

export default function Hello(): ReactElement {
  return <h1 className={styles.hello}>Здесь ведется разработка торговой площадки</h1>;
}
