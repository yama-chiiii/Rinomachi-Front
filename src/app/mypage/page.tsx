'use client';

import Link from "next/link";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Mypage() {
  const { isLoggedIn, username, userId, logout } = useAuth();
  const router = useRouter();

  const deleteAccount = () => {
    if (confirm('本当にアカウントを削除しますか？')) {
      fetch(`http://localhost:8080/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // アカウント削除処理
      logout();
      router.push('/');
    }
  }

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
            <div className='w-100 h-100 mt-20 rounded-full rounded-full overflow-hidden'>
              <Image src="/celebi.png" alt="Image" height={150} width={150} />
            </div>
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
          <button onClick={deleteAccount} className='mt-36 text-red-dark text-xl mx-12 mb-48'>
              アカウント削除
          </button>
        </div>
        <button className='py-12 px-18 mb-130 rounded-md bg-brown-dark text-white mt-48'>
          <Link href={'/'}>ホームに戻る</Link>
        </button>
      </div>
    </div>
  ): null;
}