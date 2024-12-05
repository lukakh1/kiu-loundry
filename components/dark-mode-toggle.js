'use client';

import useDarkMode from '@/hooks/use-dark-mode';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle({ defaultTheme = 'dark' }) {
  const { theme, toggleTheme } = useDarkMode(defaultTheme);

  return (
    <button
      className='rounded-md bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-500 disabled:opacity-50 text-sm px-3 py-1.5'
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Moon className='w-6 h-6' />
      ) : (
        <Sun className='w-6 h-6' />
      )}
    </button>
  );
}
