'use client';

import Line from '@/app/component/Line';
import Price from '@/app/component/Price';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchLine() {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const router = useRouter();

  const handleConditionChange = (condition: string, checked: boolean) => {
    setTimeout(() => {
      setSelectedConditions((prev) => {
        const newConditions = checked
          ? [...prev, condition].filter(
              (value, index, self) => self.indexOf(value) === index
            ) // 重複を排除
          : prev.filter((c) => c !== condition);

        return newConditions;
      });
    }, 0);
  };

  const handleSearch = () => {
    if (selectedConditions.length > 0) {
      const query = new URLSearchParams({
        conditions: selectedConditions.join(','), // 駅名のみをクエリに追加
      });
      router.push(`/houseList?${query.toString()}`);
    } else {
      alert('条件を選択してください。');
    }
  };

  return (
    <div className="w-full lg:w-1/2 min-h-screen bg-brown-light flex flex-col mx-auto font-mPlus font-semibold text-2xl">
      <Line onConditionChange={handleConditionChange} />
      <div className="mx-32 mb-12 text-3xl text-brown-dark">〇その他絞り込み</div>
      <Price />
      <div className="flex justify-center text-center">
        <button
          onClick={handleSearch}
          className="my-20 mb-80 px-30 py-15 rounded bg-brown-dark text-white text-xl hover:text-brown"
        >
          この条件で検索する
        </button>
      </div>
    </div>
  );
}
