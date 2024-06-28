import * as React from 'react';
import logo from '../../../public/logo-test-english-web-home.webp'
import instagram from '../../../public/instagram.svg'
import facebook from '../../../public/facebook.svg'
import twitter from '../../../public/twitter.svg'
import youtube from '../../../public/youtube.svg'
import Image from 'next/image';
import Link from 'next/link';

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
  return (
    <footer className='bg-greyblue py-5 flex justify-center'>
      <div className='flex max-w-[1280px] w-full'>
        <div className='w-1/5 px-6'>
          <div className='px-9 py-3.5'>
            <Link href={'/'}>
              <Image
                src={logo}
                alt='Test english'
                width={136}
                height={22}
              />
            </Link>
          </div>
          <div className='flex flex-col pt-11 pr-3 pl-10 text-white text-xs'>
            © Copyright 2016-2023
            <Link className='text-sm font-medium transition hover:text-c-testenglish' href="/about-us/" target="_blank">test-english.com</Link>
            <span>All rights reserved. </span>
            <br />
            <br />
            Make at
            <a className='text-sm font-medium transition hover:text-c-testenglish' title="Web responsive development" href="https://illadelsbous.com" target="_blank">illadelsbous.com</a>
          </div>
        </div>
        <div className='w-1/5 px-6 border-l border-[#5d7799]'>
          <h5 className='text-white font-bold leading-4 mt-6'>Levels</h5>
          <ul>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/level-a1/">A1 Elementary</Link>
            </li>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/level-a2/">A2 Pre-intermediate</Link>
            </li>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/level-b1/">B1 Intermediate</Link>
            </li>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/level-b1-b2/">B1 Upper-intermediate</Link>
            </li>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/level-b2/">B2 Pre-advanced</Link>
            </li>
          </ul>
        </div>
        <div className='w-1/5 px-6 border-l border-[#5d7799]'>
          <h5 className='text-white font-bold leading-4 mt-6'>Info</h5>
          <ul>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/about-us/">About us</Link>
            </li>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/terms-of-use/">Terms of Use</Link>
            </li>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/privacy-policy/">Privacy Policy</Link>
            </li>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/cookie-policy/">Cookie Policy</Link>
            </li>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/cookie-declaration/">Cookie Declaration</Link>
            </li>
          </ul>
        </div>
        <div className='w-1/5 px-6 border-l border-[#5d7799]'>
          <h5 className='text-white font-bold leading-4 mt-6'>Get in Touch</h5>
          <ul>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/about-us/">Contact us</Link>
            </li>
            <li className='text-[#5d7799] pt-2.5 leading-4'>
              <Link className='text-sm transition hover:text-c-testenglish' href="/terms-of-use/">Request a topic for a lesson</Link>
            </li>
          </ul>
          <div className='flex justify-between items-center mt-9 mb-4.5'>
            <a className='p-2.5 transition hover:bg-c-testenglish' href="https://www.instagram.com/testenglishcom/" target="_blank">
              <Image
                src={instagram}
                alt='Follow us at Instagram'
                width={20}
                height={20}
              />
            </a>
            <a className='p-2.5 transition hover:bg-c-testenglish' href="https://www.facebook.com/testenglishcom" target="_blank">
              <Image
                src={facebook}
                alt='Follow us at Facebook'
                width={20}
                height={20}
              />
            </a>
            <a className='p-2.5 transition hover:bg-c-testenglish' href="https://twitter.com/testenglishcom" target="_blank">
              <Image
                src={twitter}
                alt='Follow us at Twitter'
                width={20}
                height={20}
              />
            </a>
            <a className='p-2.5 transition hover:bg-c-testenglish' href="https://www.youtube.com/channel/UCHUG1E9lZVUf4RDvyMP0UeQ" target="_blank">
              <Image
                src={youtube}
                alt='Test English Youtube'
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
        <div className='w-1/5 px-6 border-l border-[#5d7799]'>
          <div className='mt-9 flex flex-col'>
            <Link
              className='transition flex text-white hover:bg-c-testenglish font-bold justify-center items-center my-2.5 rounded-md border border-2 min-h-9 my-2.5'
              href="#"
              role="button">
              Take a level test
            </Link>
            <Link
              className='transition flex text-white hover:bg-c-testenglish font-bold justify-center items-center my-2.5 rounded-md border border-2 min-h-9 my-2.5'
              href="/work-in-progress/"
              role="button">
              Upgrade to pro
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
