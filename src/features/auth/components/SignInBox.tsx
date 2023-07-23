import styles from './SignInBox.module.scss';
import logo from '@assets/img/icons/Logo.svg';
import { SignInFormBox } from './SignInFormBox';

export function SignInBox() {
  return (
    <>
      <div className={styles.signInBox}>
        <div className={styles.logoBox}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.wrapper}>
          <SignInFormBox />
        </div>
      </div>
    </>
  );
}
