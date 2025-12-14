import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/shared/auth/get-current-user';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }

  return <>{children}</>;
}
