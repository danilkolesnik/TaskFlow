'use client';

import { signIn } from '@/server/actions/auth';

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    await signIn(formData);
  }

  return (
    <form action={handleLogin}>
      <input name="email" />
      <input name="password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
