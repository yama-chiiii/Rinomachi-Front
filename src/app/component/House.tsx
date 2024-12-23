'use client';

import { useState } from 'react';

type HouseProps = {
  housetype: '賃貸' | '売買';
  name: string; // 建物名
  address: string; // 住所
  structure: string; // 構造
  floors: number; // 階数
  age: number; // 築年数
  price: number; // 家賃または価格
  transportation: string; // 最寄り駅
};

export default function House({
  housetype,
  name,
  address,
  structure,
  floors,
  age,
  price,
  transportation,
}: HouseProps) {
  const [isLiked, setIsLiked] = useState(false); // お気に入り状態の管理

  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className="w-full p-4 border rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className={`px-4 py-2 text-white rounded-md ${housetype === '賃貸' ? 'bg-green-500' : 'bg-orange-500'}`}>
          {housetype}
        </div>
        <div
          className={`cursor-pointer text-2xl transform transition-transform ${
            isLiked ? 'text-red-500 scale-125' : 'text-gray-400 scale-100'
          }`}
          onClick={toggleLike}
        >
          ♥
        </div>
      </div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{address}</p>
      <div className="mt-4">
        <table className="w-full text-left border-collapse">
          <tbody>
            <tr>
              <th className="pr-2 text-gray-700">構造:</th>
              <td>{structure}</td>
            </tr>
            <tr>
              <th className="pr-2 text-gray-700">階数:</th>
              <td>{floors}階</td>
            </tr>
            <tr>
              <th className="pr-2 text-gray-700">築年数:</th>
              <td>{age}年</td>
            </tr>
            <tr>
              <th className="pr-2 text-gray-700">価格:</th>
              <td>{price}万円</td>
            </tr>
            <tr>
              <th className="pr-2 text-gray-700">最寄り駅:</th>
              <td>{transportation}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
