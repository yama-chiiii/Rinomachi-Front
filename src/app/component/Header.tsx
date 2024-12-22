'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const { isLoggedIn } = useAuth()

  return (
    <div className='flex justify-center z-50 relative'>
      <div className='w-full lg:w-1/2 flex fixed top-0 bg-brown-light drop-shadow-md'>
        <button
          type='button'
          className='top-0 bg-brown-dark flex text-white font-mPlus px-20 py-20 font-bold text-xl'
        >
          <Link href={'/'}>リノマチ！</Link>
        </button>
        <div className='flex items-center ml-auto mr-5 '>
          <div className='ml-10 pt-14'>
            <button type='button' className='pl-3 w-38 h-35'>
              <Image src='/watch.svg' width={36} height={36} alt='Icon' />
            </button>
            <div className='font-mPlus font-semibold text-xxs'>最近見た</div>
          </div>
          <div className='ml-10 pt-14'>
            <button type='button' className='pl-13 w-48 h-35'>
              <Image src='/description.svg' width={36} height={36} alt='Icon' />
            </button>
            <div className='font-mPlus font-semibold text-xxs'>
              保存した条件
            </div>
          </div>
          <div className='ml-10 pt-14'>
            <button type='button' className='pl-7 w-42 h-35'>
              <Image src='/favorite.svg' width={36} height={36} alt='Icon' />
            </button>
            <div className='font-mPlus font-semibold text-xxs'>おきにいり</div>
          </div>
          <div className='ml-10 pt-14'>
            <nav>
              {isLoggedIn ? (
                <div className='flex flex-col items-center'>
                  <Link href='/mypage'>
                    <Image
                      src='/person.svg'
                      width={40}
                      height={36}
                      alt='Icon'
                    />
                    <div className='font-mPlus font-semibold text-xxs'>
                      マイページ
                    </div>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link href='/signin'>
                    <Image
                      src='/person.svg'
                      width={40}
                      height={36}
                      alt='Icon'
                    />
                    <button className='w-full h-auto -mt-16 font-mPlus font-semibold text-xxs'>
                      ログイン
                    </button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
