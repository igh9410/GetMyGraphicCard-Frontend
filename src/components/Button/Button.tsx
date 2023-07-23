import React, { HTMLProps } from 'react';
import styles from './Button.module.scss';

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  label: string;
};

export function Button({ label = '' }: ButtonProps) {
  return <button className={styles.button}>{label}</button>;
}
