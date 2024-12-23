'use client'

import Link from 'next/link'
import Line from '@/app/component/Line'
import Price from '@/app/component/Price'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchLine() {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const router = useRouter()

  const handleConditionChange = (condition: string, checked: boolean) => {
    setSelectedConditions((prev) => {
      const newConditions = checked
        ? [...prev, condition].filter(
            (value, index, self) => self.indexOf(value) === index,
          ) // 重複を排除
        : prev.filter((c) => c !== condition)
      return newConditions
    })
  }

  const handleSearch = () => {
    if (selectedConditions.length > 0) {
      const query = new URLSearchParams({
        conditions: selectedConditions.join(','), // 選択された条件をクエリに追加
      })
      router.push(`/houseList?${query.toString()}`)
    } else {
      alert('条件を選択してください。')
    }
  }

  return (
    <div className='w-full lg:w-1/2 min-h-screen bg-brown-light flex flex-col mx-auto font-mPlus font-semibold text-2xl'>
      <div className=' mt-120 '>
        <Price onConditionChange={handleConditionChange} />
      </div>
      <hr className='my-8 border-t border-gray-300' />
      <div className='mx-32 text-3xl text-brown-dark'>〇その他の項目</div>
      <Line onConditionChange={handleConditionChange} />
      <div className='flex justify-center text-center'>
        <button
          onClick={handleSearch}
          className='my-20 mb-80 px-30 py-15 rounded bg-brown-dark text-white text-xl hover:text-brown'
        >
          <Link href="/houseList">
            この条件で検索する
          </Link>
        </button>
      </div>
    </div>
  )
}
