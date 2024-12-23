'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import House from '../component/House'

type Building = {
  bid: string
  address: string
  structure: string
  floors: number
  age: number
  area: number
  contract: string
  description: string
  is_available: boolean
  price: number
  transportation: string
  favorites: number
  createdAt: string
  updatedAt: string
}

function HouseListContent() {
  const searchParams = useSearchParams()
  const [conditions, setConditions] = useState<string[]>([])
  const [buildings, setBuildings] = useState<Building[]>([]) // 建物リストを管理
  const [loading, setLoading] = useState(true) // ローディング状態
  const [error, setError] = useState<string | null>(null) // エラー状態

  useEffect(() => {
    // クエリパラメータから条件を取得
    const conditionsParam = searchParams.get('conditions')
    if (conditionsParam) {
      setConditions(conditionsParam.split(',')) // 条件を配列に変換
    }
  }, [searchParams])

  useEffect(() => {
    // APIから建物データを取得
    const fetchBuildings = async () => {
      try {
        setLoading(true) // ローディング開始
        console.log("APIリクエストを開始します");

        const response = await fetch("http://localhost:8080/buildings", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });


        console.log("レスポンスステータス:", response.status, response.statusText);

        if (!response.ok) {
          throw new Error(`HTTPエラー: ${response.status} ${response.statusText}`);
        }

        const data: Building[] = await response.json();
        console.log("取得したデータ:", data);
        setBuildings(data); // 建物データを状態に格納
      } catch (err) {
        console.error("エラー内容:", err);
        setError("データ取得中にエラーが発生しました");
      } finally {
        setLoading(false) // ローディング終了
      }
    }

    fetchBuildings() // 関数を呼び出す
  }, [])

  if (loading) {
    return <div>Loading...</div> // ローディング中の表示
  }

  if (error) {
    return <div className='text-red-500'>{error}</div> // エラー時の表示
  }

  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold'>
      <div className='w-full lg:w-1/2 min-h-screen flex flex-col items-center bg-brown-light text-brown-dark'>
        <div className='w-full lg:w-11/12 h-12 z-10 mt-140 rounded-t-md bg-brown-dark'></div>
        <div className='w-full lg:w-11/12 h-auto -m-12 flex items-center mx-54 rounded-md bg-white text-brown-dark py-28 px-36'>
          <div className='flex flex-row flex-wrap ml-10 gap-4'>
            {conditions.length > 0 ? (
              conditions.map((condition, index) => (
                <span
                  key={index}
                  className='px-3 py-1 text-md lg:text-2xl text-brown-dark'
                >
                  {condition}
                </span>
              ))
            ) : (
              <span>条件が選択されていません</span>
            )}
          </div>
          <div className='text-md lg:text-2xl text-dark-brown'>の物件</div>
        </div>
        <div className='w-full lg:w-11/12 mt-32 bg-white'>
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
  )
}

export default function HouseList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HouseListContent />
    </Suspense>
  )
}
