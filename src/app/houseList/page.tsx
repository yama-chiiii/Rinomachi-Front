'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import House from '../component/House';

type Building = {
  bid: string;
  address: string;
  structure: string;
  floors: number;
  age: number;
  area: number;
  contract: string;
  description: string;
  is_available: boolean;
  price: number;
  transportation: string;
  favorites: number;
  createdAt: string;
  updatedAt: string;
};

function HouseListContent() {
  const searchParams = useSearchParams();
  const [conditions, setConditions] = useState<string[]>([]);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const conditionsParam = searchParams.get('conditions');
    if (conditionsParam) {
      setConditions(conditionsParam.split(','));
    }
  }, [searchParams]);

  // APIから建物データを取得
  const fetchBuildings = async () => {
    try {
      setLoading(true);
      console.log('APIリクエストを開始します...');

      const response = await fetch('http://localhost:8080/buildings', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('レスポンス全体:', response);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTPエラー: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const data: Building[] = await response.json();
      console.log('取得したデータ:', data);
      setBuildings(data);
    } catch (error) {
      console.error('エラー内容:', error);
      setError(
        error instanceof Error
          ? error.message
          : 'サーバーから予期しないエラーが発生しました。'
      );
    } finally {
      setLoading(false);
    }
  };

  // 条件が変更された際にAPIリクエストをトリガー
  useEffect(() => {
    fetchBuildings();
  }, [conditions]);

  if (loading) {
    return (
      <div className="animate-pulse w-full min-h-screen flex flex-col items-center bg-gray-200">
        <div className="w-1/2 h-8 bg-gray-300 mb-4 rounded"></div>
        <div className="w-3/4 h-6 bg-gray-300 mb-2 rounded"></div>
        <div className="w-2/3 h-6 bg-gray-300 mb-2 rounded"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="bg-red-100 text-red-700 p-6 rounded-lg">
          データ取得中にエラーが発生しました:
          <br />
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center font-mPlus font-semibold">
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-center bg-brown-light text-brown-dark">
        <div className="w-full lg:w-11/12 h-12 z-10 mt-140 rounded-t-md bg-brown-dark"></div>
        <div className="w-full lg:w-11/12 h-auto -m-12 flex items-center mx-54 rounded-md bg-white text-brown-dark py-28 px-36">
          <div className="flex flex-row flex-wrap ml-10 gap-4">
            {conditions.length > 0 ? (
              conditions.map((condition, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-md lg:text-2xl text-brown-dark"
                >
                  {condition}
                </span>
              ))
            ) : (
              <span>条件が選択されていません</span>
            )}
          </div>
          <div className="text-md lg:text-2xl text-dark-brown">の物件</div>
        </div>
        <div className="w-full lg:w-11/12 mt-32 bg-white">
          {buildings.map((building) => (
            <House
              key={building.bid}
              housetype={building.contract === '賃貸' ? '賃貸' : '売買'}
              name={building.description}
              address={building.address}
              floors={building.floors}
              structure={building.structure}
              price={building.price}
              age={building.age}
              area={building.area}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HouseList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HouseListContent />
    </Suspense>
  );
}
