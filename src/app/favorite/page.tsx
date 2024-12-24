'use client'

import Image from 'next/image'
import { useAuth } from '../context/AuthContext'

const Favorite = () => {
  const { likes, toggleLike } = useAuth() // AuthContext から likes と toggleLike を取得

  // いいねされたアイテムだけをフィルタリング
  const favoriteItems = Object.entries(likes).filter(([, value]) => value)

  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold'>
      <div className='w-full lg:w-1/2 min-h-screen flex flex-col items-center bg-brown-light text-brown-dark'>
        <div className='mt-180 text-2xl lg:text-5xl text-brown-dark'>
          お気に入り一覧
        </div>
        <div className='-mt-8 lg:-mt-16 mb-12 text-xxs lg:text-lg text-brown-dark'>
          ------------------------------------
        </div>
        {favoriteItems.length === 0 ? (
          <p>お気に入りがまだありません。</p>
        ) : (
          <div className='w-full max-w-4xl flex flex-col space-y-4'>
            {favoriteItems.map(([name]) => (
              <div
                key={name}
                className='w-full p-4 border border-gray-300 rounded-md shadow-sm bg-white'
              >
                <div className='flex justify-between items-center'>
                  <h2 className='text-xl font-semibold'>{name}</h2>
                  <div
                    className='font-hachi text-red-dark cursor-pointer'
                    onClick={() => toggleLike(name)}
                  >
                    ♥
                  </div>
                </div>

                {/* 画像 */}
                <Image
                  src='/houseEX_1.svg'
                  width={200}
                  height={64}
                  alt={name}
                  className='mt-12'
                />

                <div className='mt-4'>
                  <p>この建物をお気に入りに登録しました。</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorite
