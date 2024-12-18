'use client'
import { useState } from 'react'

function CheckBox({
  name,
  id,
  setIsChecked,
}: {
  name: string
  id: string
  setIsChecked: () => void
}) {
  const handleChange = () => {
    setIsChecked()
  }
  return (
    <div className='flex items-center space-x-3'>
      <input
        type='checkbox'
        id={id}
        onChange={handleChange}
        className='w-15 h-15 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
      />
      <label htmlFor='checkbox' className='text-gray-700 font-medium'>
        {name}
      </label>
    </div>
  )
}

export default function Price() {
  const [isChecked, setIsChecked] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [line, setLine] = useState('JQ')

  return (
    <>
      <div className='w-full mb-32 flex flex-col mx-auto font-mPlus font-semibold text-2xl'>
        <div className='w-full h-full bg-brown-light text-red-dark'>
          <div className='bg-white rounded mb-20 mx-30 pr-15 pb-20'>
            <div className='flex border-b border-dashed border-brown-dark w-205 pt-20 ml-20'>
              <div className='font-mPlus text-brown-dark'>価格相場から探す</div>
            </div>
            <div className='flex w-full h-auto'>
              <div className='flex-col text-xl'>
                <div className='flex flex-wrap gap-10 mt-15 ml-20 pb-10 border-b border-dashed border-brown-dark'>
                  <CheckBox
                    name='〜10万'
                    id='price'
                    setIsChecked={() => setIsChecked(!isChecked)}
                  />
                  <CheckBox
                    name='10〜50万'
                    id='price'
                    setIsChecked={() => setIsChecked(!isChecked)}
                  />
                  <CheckBox
                    name='50〜100万'
                    id='price'
                    setIsChecked={() => setIsChecked(!isChecked)}
                  />
                  <CheckBox
                    name='100〜500万'
                    id='price'
                    setIsChecked={() => setIsChecked(!isChecked)}
                  />
                  <CheckBox
                    name='500〜1000万'
                    id='price'
                    setIsChecked={() => setIsChecked(!isChecked)}
                  />
                  <CheckBox
                    name='1000〜3000万'
                    id='price'
                    setIsChecked={() => setIsChecked(!isChecked)}
                  />
                  <CheckBox
                    name='3000〜5000万'
                    id='price'
                    setIsChecked={() => setIsChecked(!isChecked)}
                  />
                  <CheckBox
                    name='5000〜1億'
                    id='price'
                    setIsChecked={() => setIsChecked(!isChecked)}
                  />
                </div>
                <div className='flex flex-wrap gap-5 mt-15 ml-20'>
                  <CheckBox
                    name='賃貸のみ'
                    id='price'
                    setIsChecked={() => setIsChecked(!isChecked)}
                  />
                  <CheckBox
                    name='借家のみ'
                    id='price'
                    setIsChecked={() => setIsChecked(!isChecked)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
