'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSignin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const users = await response.json();
        const user = users.find(
          (u: { email: string; password: string }) =>
            u.email === email && u.password === password
        );

        if (user) {
          login(user.name, user.id);
          setMessage('ログイン成功！');
          router.push('/'); // ホームページにリダイレクト
        } else {
          setMessage('ユーザー名またはパスワードが間違っています。');
        }
      } else {
        setMessage('サーバーエラーが発生しました。');
      }
    } catch (error) {
      setMessage('通信エラーが発生しました。');
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center bg-brown-light font-mPlus font-semibold">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md text-brown-dark">
        <h1 className="text-4xl lg:text-5xl text-bold mt-120 lg:mt-60 mb-8 text-center">
          リノマチ！
        </h1>
        <div className="text-xl lg:text-2xl text-opacity-75 mb-30 text-center">
          サインイン
        </div>
        <form onSubmit={handleSignin}>
          <div className="mx-10 mb-10">
            <label htmlFor="email" className="block mb-2 text-lg">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-4 py-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark"
            />
          </div>
          <div className="mx-10 mb-10">
            <label htmlFor="password" className="block mb-2 text-lg">
              パスワード
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワードを入力"
              className="w-full px-4 py-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark"
            />
          </div>
          <div className="mt-30 mx-10 text-center border-b border-brown-dark">
            <button
              type="submit"
              className="w-full px-6 py-10 mb-35 bg-brown-dark text-white text-lg font-bold rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-light"
            >
              サインイン
            </button>
            {message && <p>{message}</p>}
          </div>
        </form>
        <div className="mx-10 mt-35 text-center">
          <Link href={'/signup'}>
            <button
              type="button"
              className="w-full px-6 py-10 bg-brown text-brown-dark text-lg font-bold rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-light"
            >
              新規登録
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
