'use client'
import Image from 'next/image';
import { useState } from 'react';

type HouseProps = {
  housetype: "賃貸" | "売買";
  name: string; // 建物の名前
  address: string; // 建物の住所
  floors: number; // 階数
  structure: string; // 構造
  price: number; // 家賃や価格
  age: number; // 築年数
  area: number; // 床面積
};

export default function House({
  housetype,
  name,
  address,
  floors,
  structure,
  price,
  age,
  area,
}: HouseProps) {
  const [isLiked, setIsLiked] = useState(false)

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className='w-full h-auto font-mPlus font-semibold'>
      <div className='w-full flex flex-col lg:flex-row justify-center bg-white mt-32 text-brown-dark'>
        {/* 左半分 */}
        <div className='flex flex-col justify-start mx-12'>
          <div className='flex flex-row items-center mt-32 justify-between'>
            <div className='flex flex-row items-center'>
              {/* タグ */}
              <div
                className={`px-4 lg:px-8 py-2 rounded-md text-white text-xs lg:text-md ${
                  housetype === '賃貸' ? 'bg-green-light' : 'bg-orange'
                }`}
              >
                {housetype}
              </div>
              <div className='px-8 text-md lg:text-xl'>{name}</div>
            </div>
          </div>
          <Image
            src='/houseEX_1.svg'
            width={200}
            height={64}
            alt='house1'
            className='mt-12'
          />
        </div>
        {/* →半分 */}
        <div className='flex flex-col lg:mx-12 mt-4 lg:mt-20'>
          <div className='flex flex-row-reverse'>
            <div
              className={`font-hachi mx-12 -mb-16 lg:-mb-0 text-2xl cursor-pointer transform transition-all duration-300 ease-out ${
                isLiked
                  ? 'text-red-dark scale-125'
                  : 'text-gray-400 scale-100'
              }`}
              onClick={toggleLike}
            >
              ♥
            </div>
          </div>

          {/* 所在地 */}
          <div className='flex flex-col whitespace-nowrap -ml-6 lg:-ml-0 lg:flex-row lg:items-center items-start mt-0 lg:mt-12'>
            <div className='mx-8 px-8 whitespace-nowrap py-4 rounded-md text-xs lg:text-md border-2 border-brown text-brown-dark bg-brown-light'>
              所在地
            </div>
            <div className='mt-4 lg:mt-0 mx-12 lg:mx-0 text-brown-dark text-xs lg:text-lg'>
              {address}
            </div>
          </div>
          <div className='flex flex-col -ml-6 lg:-ml-0 lg:flex-row items-start lg:items-center mt-12'>
            <div className='mx-8 px-8 py-4 rounded-md text-xs lg:text-md border-2 border-brown text-brown-dark bg-brown-light'>
              最寄駅
            </div>
            <div className='mt-4 lg:mt-0 mx-12 lg:mx-0 text-brown-dark text-xs lg:text-lg'>
              モノレール志井　徒歩10分
            </div>
          </div>
          {/* テーブル */}
          <table className='mt-20 border border-collapse border-brown-light w-full text-center lg:ml-8'>
            <thead>
              <tr className='bg-brown-light text-brown-dark text-xxs lg:text-xs'>
                <th className='py-4 lg:px-6 border-2 border-brown '>階数</th>
                <th className='py-4 lg:px-6 border-2 border-brown'>構造</th>
                <th className='py-4 lg:px-6 border-2 border-brown'>家賃</th>
                <th className='py-4 lg:px-6 border-2 border-brown'>築年数</th>
                <th className='py-4 lg:px-6 border-2 border-brown'>床面積</th>
                <th className='py-4 lg:px-6 border-2 border-brown'>詳細</th>
              </tr>
            </thead>
            <tbody className='text-xs lg:ttext-sm'>
              <tr>
              <td className="py-4 px-6 border-2 border-brown">{floors}</td>
                <td className="py-4 px-6 border-2 border-brown">{structure}</td>
                <td className="py-4 px-6 border-2 border-brown">{price}円</td>
                <td className="py-4 px-6 border-2 border-brown">{age}年</td>
                <td className="py-4 px-6 border-2 border-brown">{area}坪</td>
                <td className='py-4 px-6 border-2 border-brown '>
                  <div className='relative inline-block'>
                    <div className='absolute top-2 left-1 w-full h-full bg-brown-hover rounded-md'></div>

                    <button className='relative px-6 py-3 bg-brown text-white font-semibold rounded-md shadow-sm'>
                      詳細を見る
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='mx-12 lg:mx-32 mt-40 border-2 border-gray-200'></div>
    </div>
  )
}