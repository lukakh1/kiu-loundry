import useServerDarkMode from '@/hooks/use-server-dark-mode';
import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle';
import { createClient } from '@/lib/supabase/server';
import { KeyRound, PersonStanding } from 'lucide-react';
import SignOutButton from './sign-out-button';

export default async function PageHeader() {
  const theme = useServerDarkMode();
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <header className='flex justify-between items-center py-8'>
      <Link
        href='/'
        className='text-3xl dark:hover:bg-gray-500 underline-offset-8 decoration-2 hover:bg-gray-400 p-3'
      >
        KIU Laundry
      </Link>
      <div className='flex items-center'>
        <DarkModeToggle defaultTheme={theme} />
        {user && (
          <Link
            href='/dashboard/settings'
            className={`flex items-center space-x-1 ${variants['ghost']} ${sizes['sm']}`}
          >
            <PersonStanding className='w-6 h-6' />
            <span>{user?.user_metadata?.fullName ?? user?.email}</span>
          </Link>
        )}
        {user && <SignOutButton />}
        {!user && (
          <Link
            href='/login'
            className='text-sm px-3 py-1.5 rounded-md bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-500 disabled:opacity-50'
          >
            <KeyRound className='w-6 h-6' />
          </Link>
        )}
      </div>
    </header>
  );
}
