import React from 'react';
import styles from './SignUpBox.module.scss';
import logo from '@assets/img/icons/Logo.svg';
import { FormBox } from './FormBox';

export function SignUpBox() {
  return (
    <>
      <div className={styles.createAccountBox}>
        <div className={styles.logoBox}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.wrapper}>
          <FormBox />
        </div>
      </div>
    </>
  );
}
