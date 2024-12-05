'use server';

import { createClient } from './supabase/server';

export async function login(prevState, formData) {
  const supabase = createClient();
  const email = formData.get('email');
  const { error } = supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });

  if (error) {
    return {
      error: true,
      message: 'error authenticating',
    };
  }

  return {
    message: `email sent to ${email}`,
  };
}

export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  redirect('/login');
}
