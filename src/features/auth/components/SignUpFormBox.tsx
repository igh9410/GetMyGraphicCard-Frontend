import { FormEvent, useRef } from 'react';
import styles from './SignUpFormBox.module.scss';
import { Form } from 'react-router-dom';
import { InputForm } from './InputForm';
import { Button } from '@components';
import { useSignUp } from '@hooks';

export function SignUpFormBox() {
  const { signUp, isLoading, error } = useSignUp();
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  const handleSignUpSubmit = (e: FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value; // You need to add usernameRef
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    console.log('Username = ', username);
    console.log('Password = ', password);
    console.log('Confirm Password = ', confirmPassword);

    if (!username || !email || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }

    signUp({ username, email, password, confirmPassword });
  };

  return (
    <Form
      method="POST"
      className={styles.formBox}
      onSubmit={handleSignUpSubmit}
    >
      <div className={styles.textBox}>
        <div className={styles.wrapper}>
          <p className={styles.createAccount}>Create an account</p>
          <p className={styles.signUpDescription}>
            Sign up today and get notified for your
            <br />
            graphics card price information!
          </p>
        </div>

        <InputForm label="Username" inputRef={usernameRef} />
        <InputForm label="E-mail" inputRef={emailRef} />
        <InputForm label="Password" inputRef={passwordRef} />
        <InputForm label="Confirm Password" inputRef={confirmPasswordRef} />
        <Button label="Sign Up" />
      </div>
    </Form>
  );
}
