import { AuthLayout } from '@components';
import { SignInBox } from '@features/auth';

export function LogIn() {
  return (
    <>
      <AuthLayout>
        <SignInBox />
      </AuthLayout>
    </>
  );
}
