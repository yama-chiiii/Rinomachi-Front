import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-center z-50 relative'>
      <div className='w-full lg:w-1/2 flex fixed top-0 bg-brown-light drop-shadow-md'>
        <button
          type='button'
          className='top-0 bg-brown-dark flex text-white font-mPlus px-20 py-20 font-bold text-xl'
        >
          <Link href={'/'}>リノマチ！</Link>
        </button>
        <div className='flex items-center ml-auto mr-5 '>
          <div className='ml-10 pt-14'>
            <button type='button' className='pl-3 w-38 h-35'>
                <Link href="/history">
                    <Image src='/watch.svg' width={36} height={36} alt='Icon' />
                </Link>
            </button>
            <div className='font-mPlus font-semibold text-xxs'>最近見た</div>
          </div>
          <div className='ml-10 pt-14'>
            <button type='button' className='pl-13 w-48 h-35'>
                <Link href="/save">
                    <Image src='/description.svg' width={36} height={36} alt='Icon' />
                </Link>
            </button>
            <div className='font-mPlus font-semibold text-xxs'>
              保存した条件
            </div>
          </div>
          <div className='ml-10 pt-14'>
            <button type='button' className='pl-7 w-42 h-35'>
                <Link href='/favorite'>
                    <Image src='/favorite.svg' width={36} height={36} alt='Icon' />
                </Link>
              
            </button>
            <div className='font-mPlus font-semibold text-xxs'>おきにいり</div>
          </div>
          <div className='ml-10 pt-14'>
            <Link href='/signin'>
              <button type='button' className='pl-3 w-38 h-35'>
                <Image src='/person.svg' width={36} height={36} alt='Icon' />
              </button>
            </Link>
            <div className='font-mPlus font-semibold text-xxs'>ログイン</div>
          </div>
        </div>
      </div>
    </div>
  )
}
