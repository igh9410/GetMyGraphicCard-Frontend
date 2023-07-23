import React from 'react';
import styles from './AuthLayout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authContainer}>{children}</div>
    </div>
  );
};
