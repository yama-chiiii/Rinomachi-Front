'use client'

import House from '../component/House'

const History = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold '>
      <div className='w-full lg:w-1/2 min-h-screen flex flex-col items-start px-40  bg-brown-light text-red-dark'>
        <div className='mt-180 text-2xl lg:text-5xl text-brown-dark text-center'>
          履歴一覧
        </div>
        <div className='-mt-8 lg:-mt-16 mb-12 text-xxs lg:text-lg text-brown-dark'>
          --------------------
        </div>
        <div className='text-lg'>名前さんの履歴一覧</div>
        <div className='w-full flex justify-center'>
          <div className='w-11/12 min-h-screen mt-12 bg-white'>
            <House
              housetype={'賃貸'}
              name={''}
              address={''}
              floors={0}
              structure={''}
              price={0}
              age={0}
              area={0}
            />
            <House
              housetype={'賃貸'}
              name={''}
              address={''}
              floors={0}
              structure={''}
              price={0}
              age={0}
              area={0}
            />
            <House
              housetype={'賃貸'}
              name={''}
              address={''}
              floors={0}
              structure={''}
              price={0}
              age={0}
              area={0}
            />
            <House
              housetype={'賃貸'}
              name={''}
              address={''}
              floors={0}
              structure={''}
              price={0}
              age={0}
              area={0}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
