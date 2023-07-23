import { Form } from 'react-router-dom';
import styles from './SignInFormBox.module.scss';
import { FormEvent } from 'react';
import { InputForm } from './InputForm';
import { Button } from '@components';

export function SignInFormBox() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Form method="POST" className={styles.formBox} onSubmit={handleSubmit}>
      <div className={styles.textBox}>
        <p className={styles.signIn}>Sign In</p>
        <InputForm label="Username" />
        <InputForm label="Password" />
        <Button label="Sign In" />
      </div>
    </Form>
  );
}
