/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import House from '../component/House';

// APIから取得するデータの型定義
type Building = {
  bid: string; // 建物ID
  address: string; // 住所
  structure: string; // 構造
  floors: number; // 階数
  age: number; // 築年数
  area: number; // 床面積
  contract: string; // 契約タイプ
  description: string; // 説明文
  is_available: boolean; // 賃貸可能かどうか
  price: number; // 家賃または価格
  transportation: string; // 最寄り駅
};

export default function HouseList() {
  const [buildings, setBuildings] = useState<Building[]>([]); // 建物データの状態
  const [loading, setLoading] = useState(true); // ローディング状態
  const [error, setError] = useState<string | null>(null); // エラー状態

  useEffect(() => {
    // APIから建物データを取得
    async function fetchBuildings() {
      try {
        const response = await fetch('http://localhost:8080/buildings', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`サーバーエラー: ${response.statusText}`);
        }

        const data: Building[] = await response.json();
        setBuildings(data); // データを状態に保存
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBuildings();
  }, []);

  if (loading) return <div className="text-center mt-10">ロード中...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">エラー: {error}</div>;

  return (
    <div className="w-full min-h-screen flex flex-col items-center font-mPlus font-semibold">
      <div className="w-full lg:w-1/2 bg-brown-light text-brown-dark p-4">
        <h1 className="text-2xl mb-4">建物一覧</h1>
        <div className="grid grid-cols-1 gap-4">
          {/* 取得したデータをループで表示 */}
          {buildings.map((building) => (
            <House
              key={building.bid}
              housetype={building.is_available ? '賃貸' : '売買'}
              name={building.description || '物件情報なし'}
              address={building.address}
              structure={building.structure}
              floors={building.floors}
              age={building.age}
              price={building.price}
              transportation={building.transportation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
