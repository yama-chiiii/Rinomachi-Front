'use client'

import { useRouter } from 'next/navigation'; // useRouter を使わずに、App Router 用の import
import { useState } from 'react'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter() // App Router に対応した useRouter を初期化

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault() // ページのリロードを防ぐ

    try {
      console.log("送信データ:", { name: username, email: email, password: password });
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        }),
      });

      console.log("サーバーからのレスポンス:", response);

      if (response.ok) {
        const data = await response.json();
        console.log("サーバーからのレスポンスデータ:", data);
        setMessage(`登録成功！ようこそ、${username}さん`);

        // 3秒後にホームページにリダイレクト
        setTimeout(() => {
          router.push('/'); // ホームページにリダイレクト
        }, 3000);
      } else {
        console.error("サーバーエラー:", response);
        setMessage('登録に失敗しました。入力内容を確認してください。');
      }
    } catch (error) {
      console.error('通信エラー:', error);
      setMessage('サーバーとの通信に失敗しました。');
    }
  }

  return (
    <div className='w-full min-h-screen flex justify-center bg-brown-light font-mPlus font-semibold'>
      <div className='w-full max-w-md p-8 rounded-lg shadow-md text-brown-dark'>
        <h1 className='text-4xl lg:text-5xl text-bold mt-120 mb-8 text-center'>
          リノマチ！
        </h1>
        <div className='text-xl lg:text-2xl text-opacity-75 mb-30 text-center'>
          新規登録
        </div>
        <form onSubmit={handleSignup}>
          <div className='mx-10 mb-10'>
            <label htmlFor='username' className='block mb-2 text-lg'>
              ユーザーネーム
            </label>
            <input
              id='username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='ユーザーネームを入力'
              className='w-full px-4 py-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark'
              required
            />
          </div>
          <div className='mx-10 mb-10'>
            <label htmlFor='email' className='block mb-2 text-lg'>
              メールアドレス
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='example@email.com'
              className='w-full px-4 py-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark'
              required
            />
          </div>
          <div className='mx-10 mb-10'>
            <label htmlFor='password' className='block mb-2 text-lg'>
              パスワード
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 修正済み
              placeholder='パスワードを入力'
              className='w-full px-4 py-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark'
              required
            />
          </div>
          <div className='mt-30 mx-10 text-center'>
            <button
              type='submit'
              className='w-full px-6 py-10 mb-35 bg-brown-dark text-white text-lg font-bold rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-light'
            >
              新規登録
            </button>
          </div>
          {message && <p className='mt-4 text-center text-lg'>{message}</p>}
        </form>
      </div>
    </div>
  )
}
