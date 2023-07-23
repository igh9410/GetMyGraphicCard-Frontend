import { AuthLayout } from '@components';
import { SignUpBox } from '@features/auth/components/SignUpBox';

export function SignUp() {
  return (
    <>
      <AuthLayout>
        <SignUpBox></SignUpBox>
      </AuthLayout>
    </>
  );
}
