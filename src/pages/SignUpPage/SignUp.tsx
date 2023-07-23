import { AuthLayout } from '@components';
import { SignUpBox } from '@features/auth';

export function SignUp() {
  return (
    <>
      <AuthLayout>
        <SignUpBox />
      </AuthLayout>
    </>
  );
}
