import { FormEvent, useRef } from 'react';
import styles from './SignUpFormBox.module.scss';
import { Form } from 'react-router-dom';
import { InputForm } from './InputForm';
import { Button } from '@components';

export function SignUpFormBox() {
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
    } else {
      // Perform signup logic
      alert('Form submitted');
    }
  };

  return (
    <Form method="POST" className={styles.formBox}>
      <div className={styles.textBox}>
        <div className={styles.wrapper}>
          <p className={styles.createAccount}>Create an account</p>
          <p className={styles.signUpDescription}>
            Sign up today and get notified for your
            <br />
            graphics card price information!
          </p>
        </div>

        <InputForm label="Username" />
        <InputForm label="E-mail" />
        <InputForm label="Password" inputRef={passwordRef} />
        <InputForm label="Confirm Password" inputRef={passwordRef} />
        <Button label="Sign Up" />
      </div>
    </Form>
  );
}
