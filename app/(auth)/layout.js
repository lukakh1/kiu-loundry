import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <main>
      <div className='mt-8'>{children}</div>
    </main>
  );
}
