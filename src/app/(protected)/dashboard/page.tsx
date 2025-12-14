'use client';

import { signOut } from '@/server/actions/auth';

export default function DashboardPage() {
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
