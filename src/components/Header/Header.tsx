import { useSignOut } from '@hooks/useSignOut';
import styles from './Header.module.scss';
import { Search } from '@components/Search';
import { Button } from '@mui/material';
import { useAuth } from '@providers';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, username, token } = useAuth();
  const { signOut } = useSignOut();
  const handleSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/signup');
  };

  const handleSignInClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/login');
  };

  const handleSignOutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (token) {
      signOut({ token });
    } else {
      console.error('No token available for sign out');
    }
  };

  return (
    <div className={styles.header}>
      <Search />

      <div className={styles.buttonWrapper}>
        <div>
          {isLoggedIn ? ( // Show User Page and Sign Out button when logged in
            <>
              <Button
                style={{
                  width: '6.3125rem',
                  height: '2.875rem',
                  marginRight: '1.25rem',
                }}
                variant="contained"
                size="medium"
              >
                {username}
              </Button>
              <Button
                style={{ width: '6.3125rem', height: '2.875rem' }}
                variant="contained"
                size="medium"
                onClick={handleSignOutClick}
              >
                Sign Out
              </Button>
            </>
          ) : (
            // Show Sign Up and Sign In Button when not logged in
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
