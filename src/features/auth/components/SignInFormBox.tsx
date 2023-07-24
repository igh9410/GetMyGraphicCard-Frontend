import { Form } from 'react-router-dom';
import styles from './SignInFormBox.module.scss';
import { FormEvent, useRef } from 'react';
import { InputForm } from './InputForm';
import { Button } from '@components';
import { useSignIn } from '@hooks';

export function SignInFormBox() {
  const { signIn, isLoading, error } = useSignIn();
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value; // You need to add usernameRef
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert('All fields are required');
      return;
    }

    signIn({ username, password });
  };

  return (
    <Form method="POST" className={styles.formBox} onSubmit={handleSubmit}>
      <div className={styles.textBox}>
        <p className={styles.signIn}>Sign In</p>
        <InputForm label="Username" inputRef={usernameRef} />
        <InputForm label="Password" inputRef={passwordRef} />
        <Button label="Sign In" />
      </div>
    </Form>
  );
}
