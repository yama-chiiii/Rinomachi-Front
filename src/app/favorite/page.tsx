'use client'

import Image from 'next/image'
import { useAuth } from '../context/AuthContext'

const Favorite = () => {
  const { likes, toggleLike } = useAuth() // AuthContext から likes と toggleLike を取得

  // いいねされたアイテムだけをフィルタリング
  const favoriteItems = Object.entries(likes).filter(([, value]) => value)

  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold'>
      <div className='w-full lg:w-1/2 px-20 min-h-screen flex flex-col items-center bg-brown-light text-brown-dark'>
        <div className="w-full mt-140 bg-white">
          <div className='w-170 lg:w-230 mt-12 mx-20 mb-20 border-b border-dashed border-brown-dark text-2xl lg:text-4xl text-brown-dark'>
          お気に入り一覧
          </div>

          {favoriteItems.length === 0 ? (
          <p className='mt-12 mx-20 mb-20'>お気に入りがまだありません。</p>
          ) : (
            <div className='flex justify-center'>
                <div className='w-11/12 max-w-4xl flex flex-col justify-center space-y-10 mb-20 '>
                  {favoriteItems.map(([name]) => (
                    <div
                      key={name}
                      className='w-full  p-4 border border-gray-300 rounded-md shadow-sm bg-white'
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Favorite
