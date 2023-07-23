import styles from './Header.module.scss';
import { Search } from '@components/Search';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  const handleSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/signup');
  };

  const handleSignInClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className={styles.header}>
      <Search />
      <div className={styles.buttonWrapper}>
        <Button
          style={{
            width: '6.3125rem',
            height: '2.875rem',
            marginRight: '1.25rem',
          }}
          variant="contained"
          size="medium"
          onClick={handleSignUpClick}
        >
          Sign Up
        </Button>
        <Button
          style={{ width: '6.3125rem', height: '2.875rem' }}
          variant="contained"
          size="medium"
          onClick={handleSignInClick}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
