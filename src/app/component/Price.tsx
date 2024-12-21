'use client'

import { useEffect, useState } from 'react'

type PriceProps = {
  onConditionChange: (condition: string, checked: boolean) => void
}

function CheckBox({
  name,
  isChecked,
  toggleCheck,
  isBold = false,
}: {
  name: string
  isChecked: boolean
  isBold?: boolean
  toggleCheck: (name: string, checked: boolean) => void
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleCheck(name, event.target.checked)
  }

  return (
    <div className='flex items-center ml-12'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        className='w-16 h-16 text-brown-dark bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
      />
      <label
        className={`ml-3 text-dark-brown text-sm lg:text-xl ${
          isBold ? 'font-bold' : 'font-medium'
        }`}
      >
        {name}
      </label>
    </div>
  )
}

export default function Price({ onConditionChange }: PriceProps) {
  const groups = {
    価格帯: [
      '〜10万',
      '10〜50万',
      '50〜100万',
      '100〜500万',
      '500〜1000万',
      '1000〜3000万',
      '3000〜5000万',
      '5000〜1億',
    ],
    タイプ: ['賃貸のみ', '借家のみ'],
  } as const

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [pendingUpdates, setPendingUpdates] = useState<
    { name: string; checked: boolean }[]
  >([])

  const toggleCheck = (name: string, checked: boolean) => {
    setCheckedItems((prev) => {
      const newState = { ...prev, [name]: checked }
      setPendingUpdates((updates) => [...updates, { name, checked }]) // 非同期で処理
      return newState
    })
  }

  useEffect(() => {
    if (pendingUpdates.length > 0) {
      const updates = [...pendingUpdates]
      setPendingUpdates([])
      updates.forEach(({ name, checked }) => onConditionChange(name, checked))
    }
  }, [pendingUpdates, onConditionChange])

  return (
    <div className='w-full flex flex-col mx-auto mb-32 font-mPlus font-semibold text-2xl'>
      <div className='w-full h-full bg-brown-light text-brown-dark'>
        <div className='bg-white rounded mt-12 mb-20 mx-30 pr-15 pb-20'>
          <div className='flex border-b border-dashed border-brown-dark w-205 mb-12 pt-20 ml-20'>
            <div className='font-mPlus text-brown-dark'>価格相場から探す</div>
          </div>
          {Object.entries(groups).map(([group, items]) => (
            <div key={group} className='mb-12'>
              <div className='mb-4 ml-8'>
                <label className='text-dark-brown font-bold text-lg'>
                  {group}
                </label>
              </div>

              <div className='flex flex-wrap gap-4 ml-16 mb-12'>
                {items.map((item) => (
                  <CheckBox
                    key={item}
                    name={item}
                    isChecked={!!checkedItems[item]}
                    toggleCheck={toggleCheck}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
