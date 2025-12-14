'use server';

import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/shared/api/supabase/server';

export async function signIn(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  redirect('/dashboard');
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
}
