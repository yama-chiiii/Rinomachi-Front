'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Mypage() {
  const { isLoggedIn, username,logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/signin');
    }
  }, [isLoggedIn, router]);

  return isLoggedIn ? (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold '>
      <div className='w-full lg:w-1/2 min-h-screen flex flex-col items-center bg-brown-light text-red-dark'>
        <div className='w-4/5 mt-184 mx-60 bg-white'>
          <div className="flex flex-col items-center">
            <div className='bg-red-500 rounded-full'>a</div>
            <div className='text-brown-dark text-2xl '>{username}</div>
          </div>
          <div className='mt-36 text-brown-dark text-xl border-b-2 border-brown mx-12'>
            登録情報の変更
          </div>
          <div className='mt-36 text-brown-dark text-xl border-b-2 border-brown mx-12'>お気に入り一覧</div>
          <div className='mt-36 text-brown-dark text-xl border-b-2 border-brown mx-12'>保存した条件</div>
          <div className='mt-36 text-brown-dark text-xl border-b-2 border-brown mx-12'>閲覧履歴</div>
          <button onClick={logout} className='mt-36 text-red-dark text-xl mx-12 mb-48'>
              ログアウト
            </button>
        </div>
        <button className='py-12 px-18 mb-130 rounded-md bg-brown-dark text-white mt-48'>
          <Link href={'/'}>ホームに戻る</Link>
        </button>
      </div>
    </div>
  ): null;
}