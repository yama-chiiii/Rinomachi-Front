'use client'

import { useEffect, useState } from 'react'

type LineProps = {
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

export default function Line({ onConditionChange }: LineProps) {
  const groups = {
    鹿児島本線: ['小倉', '西小倉'],
    日豊本線: [
      '小倉',
      '西小倉',
      '南小倉',
      '城野',
      '阿部山公園',
      '下曽根',
      '朽網',
    ],
    北九州モノレール: [
      '小倉',
      '平和通り',
      '旦過',
      '香春口三萩野',
      '片野',
      '城野',
      '北方',
      '競馬場前',
      '守恒',
      '徳力公団前',
      '徳力嵐山口',
      '志井',
      '企救丘',
    ],
  } as const

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [pendingUpdates, setPendingUpdates] = useState<
    { name: string; checked: boolean }[]
  >([])

  const toggleCheck = (name: string, checked: boolean) => {
    setCheckedItems((prev) => {
      const newState = { ...prev, [name]: checked }
      setPendingUpdates((updates) => [...updates, { name, checked }])
      return newState
    })
  }

  const toggleGroup = (group: keyof typeof groups, checked: boolean) => {
    const stations = groups[group]
    setCheckedItems((prev) => {
      const newState = { ...prev }
      stations.forEach((station) => {
        newState[station] = checked
        setPendingUpdates((updates) => [...updates, { name: station, checked }])
      })
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
        <div className='bg-white rounded mt-120 mb-20 mx-30 pr-15 pb-20'>
          <div className='flex border-b border-dashed border-brown-dark w-205 mb-12 pt-20 ml-20'>
            <div className='font-mPlus text-brown-dark'>路線・駅から探す</div>
          </div>
          {Object.entries(groups).map(([group, items]) => (
            <div key={group} className='mb-12'>
              <div className='mb-4 ml-8'>
                <CheckBox
                  name={group}
                  isChecked={items.every((item) => checkedItems[item])} // 全駅が選択されている場合にチェック
                  toggleCheck={(name, checked) =>
                    toggleGroup(name as keyof typeof groups, checked)
                  }
                  isBold={true}
                />
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
              <hr className='w-full my-4 mx-8 border-2 border-gray-200' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
