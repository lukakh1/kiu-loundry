'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const building = searchParams.get('building') ?? 'All';
  const machine = searchParams.get('machine') ?? 'All';

  const handleChange = (e) => {
    router.push(
      pathname + '?' + createQueryString(`${e.target.id}`, e.target.value)
    );
  };

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className='w-full flex justify-around'>
      <div className='flex flex-col space-y-2'>
        <label htmlFor='building' className='text-lg font-bold'>
          Building:
        </label>
        <select
          value={building}
          onChange={handleChange}
          id='building'
          className='w-80 rounded-xl border border-gray-400 dark:bg-white text-black p-2 focus:outline-none text-xl'
        >
          <option value='all'>All</option>
          <option value='yellow'>Yellow</option>
          <option value='orange'>Orange</option>
        </select>
      </div>

      <div className='flex flex-col space-y-2'>
        <label htmlFor='machine' className='text-lg font-bold'>
          Machine:
        </label>
        <select
          value={machine}
          onChange={handleChange}
          id='machine'
          className='w-80 rounded-xl border border-gray-400 dark:bg-white text-black p-2 focus:outline-none text-xl'
        >
          <option value='all'>All</option>
          <option value='washing'>washing machine</option>
          <option value='dryer'>dryer</option>
        </select>
      </div>
    </div>
  );
}
