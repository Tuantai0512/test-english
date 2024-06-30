import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='fixed top-0 z-10 flex items-center justify-between bg-[#293039ed] w-full'>
      <Link href='' className='block p-3.5'>
        <Image
          src='/logo-test-english-web-home.webp'
          alt="Nav logo"
          width={174}
          height={29}
        />
      </Link>
      <div>
        <ul className='flex'>
          <li><Link href={'#'} className='p-2 mx-1.5 text-base font-semibold text-white'>Grammar</Link></li>
          <li><Link href={'#'} className='p-2 mx-1.5 text-base font-semibold text-white'>Vocabulary</Link></li>
          <li><Link href={'#'} className='p-2 mx-1.5 text-base font-semibold text-white'>Listening</Link></li>
          <li><Link href={'#'} className='p-2 mx-1.5 text-base font-semibold text-white'>Reading</Link></li>
          <li><Link href={'#'} className='p-2 mx-1.5 text-base font-semibold text-white'>Use of English</Link></li>
          <li><Link href={'#'} className='p-2 mx-1.5 text-base font-semibold text-white'>Writing</Link></li>
          <li><Link href={'#'} className='p-2 mx-1.5 text-base font-semibold text-white'>Exams</Link></li>
        </ul>
      </div>
      <div className='flex items-center mr-4'>
        <Image
          src='/search.svg'
          alt="Search"
          width={37}
          height={37}
        />
        <Link href={'#'} className='px-1.5 py-1 rounded-xl text-base font-semibold text-white ml-4 border border-2 '>
          Login
        </Link>
      </div>
    </nav>
  );
}
