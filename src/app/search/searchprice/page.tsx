import Line from '@/app/component/Line'
import Price from '@/app/component/Price'
import Link from 'next/link'

export default function SearchPrice() {
  return (
    <div className='"w-full lg:w-1/2 min-h-screen bg-brown-light flex flex-col mx-auto font-mPlus font-semibold text-2xl'>
      <div className='mt-120 z-10'>
        <Price />
      </div>
      <div className='mx-32 mb-12 text-3xl text-brown-dark z-10'>
        〇その他絞り込み
      </div>
      <div className='-mt-120'>
        <Line />
      </div>
      <div className='flex justify-center text-center'>
        <button className='my-20 mb-80 px-30 py-15 rounded bg-brown-dark text-white text-xl'>
          <Link href={'./../houseList'} className='hover:text-brown'>
            この条件で検索する
          </Link>
        </button>
      </div>
    </div>
  )
}