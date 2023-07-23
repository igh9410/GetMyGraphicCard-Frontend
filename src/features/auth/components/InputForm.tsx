import { HTMLProps, RefObject, useRef } from 'react';
import styles from './InputForm.module.scss';

type InputFormProps = HTMLProps<HTMLDivElement> & {
  label: string;
  inputRef?: RefObject<HTMLInputElement>;
};

export function InputForm({ label, inputRef }: InputFormProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.labelBox}>{label}</label>
      {label == 'Password' || label == 'Confirm Password' ? ( // Check for Password or Confirm Password field
        <input className={styles.input} type="password" ref={inputRef} />
      ) : (
        <input className={styles.input} type="text" ref={inputRef} />
      )}
    </div>
  );
}
