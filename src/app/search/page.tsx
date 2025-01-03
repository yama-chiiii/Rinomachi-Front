'use client'

import Link from 'next/link'
// import Header from "./../component/Header";
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Search() {
  const router = useRouter()

  const handleAreaClick = (area: string) => {
    const query = new URLSearchParams({ conditions: area }).toString()
    router.push(`/houseList?${query.toString()}`)
  }

  return (
    <>
      <div className='w-full lg:w-1/2 min-h-screen flex flex-col mx-auto font-mPlus font-semibold text-2xl'>
        <div className='w-full h-full bg-brown-light text-red-dark'>
          <div className='bg-white rounded mt-120 mb-20 mx-30'>
            <div className='flex border-b border-dashed border-brown-dark w-205 pt-20 ml-20'>
              <Image src='/search.svg' alt='Icon' height={35} width={35} />

              <div className='font-mPlus text-brown-dark'>エリアから探す</div>
            </div>
            <div className='lg:flex z-30'>
              <div className='relative flex mt-20 mb-10 mx-20 lg:ml-25 lg:m-20 bg-brown-light border border-brown-dark rounded'>
                <Link href='/houseList' className='hover:text-brown-dark'>
                  <button
                    onClick={() => handleAreaClick('小倉北区')}
                    className='flex rounded-full bg-red-dark font-mPlus font-semibold text-white text-sm justify-center items-center w-69 h-69 p-20 absolute top-10 left-10'
                  >
                    小倉北区
                  </button>
                </Link>
                <div className='flex justify-center w-full h-auto'>
                  <Image
                    src='/kokura.svg'
                    alt='map'
                    height={200}
                    width={200}
                    className='my-10 lg:mx-70'
                  />
                </div>
                <Link href='/houseList' className='hover:text-brown-dark'>
                  <button
                    onClick={() => handleAreaClick('小倉南区')}
                    className='flex rounded-full bg-brown font-mPlus font-semibold text-white text-sm justify-center items-center w-69 h-69 p-20 absolute bottom-10 right-10'
                  >
                    小倉南区
                  </button>
                </Link>
              </div>
              <ul className='w-full lg:w-1/2'>
                <li className='flex justify-center'>
                  <button
                    type='button'
                    className='bg-brown-light border border-brown-dark rounded text-brown-dark font-mPlus font-semibold text-xl w-full lg:w-11/12 py-22 my-10 mx-20 lg:mt-20 '
                  >
                    <Link
                      href={'./search/searchline'}
                      className='hover:text-brown'
                    >
                      路線・駅から探す
                    </Link>
                  </button>
                </li>
                <li className='flex justify-center'>
                  <button
                    type='button'
                    className='bg-brown-light border border-brown-dark rounded text-brown-dark font-mPlus font-semibold text-xl w-full lg:w-11/12 py-22 my-10 mx-20 lg:mt-10'
                  >
                    <Link
                      href={'./search/searchprice'}
                      className='hover:text-brown'
                    >
                      相場価格から探す
                    </Link>
                  </button>
                </li>
                <li className='flex justify-center'>
                  <button
                    type='button'
                    className='bg-brown-light border border-brown-dark rounded text-brown-dark font-mPlus font-semibold text-xl w-full lg:w-11/12 py-22 my-10 mb-20 mx-20 lg:mt-9'
                  >
                    <Link href={'/condition'} className='hover:text-brown'>
                      詳細検索
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className='font-mPlus font-semibold text-brown-dark ml-25'>
            リノベーション特集
          </div>
          <div className='flex w-full h-auto font-mPlus font-semibold text-brown-dark my-10'>
            <div className='flex flex-col justify-center text-center bg-white rounded text-sm lg:text-xl w-5/12 lg:w-1/2 h-auto ml-30'>
              <div className='my-10'>リノベーション事例</div>
              <div className='text-xxs lg:text-base'>
                これまでにリノベーションされた
                <br />
                建物の一例を紹介！
              </div>
              <div className='flex justify-center z-10'>
                <div className='w-auto h-auto'>
                  <button className='mt-10 mb-10 lg:mx-40 px-10 lg:px-12 py-5 rounded-full whitespace-nowrap bg-brown-dark text-white text-xs lg:text-lg'>
                    <Link href={'/example'} className='hover:text-brown'>
                      詳細を見る
                    </Link>
                  </button>
                </div>
                {/* <div className="relative w-35 h-35 lg:w-55 lg:h-55">
                      <Image src="/house.svg" alt="Icon" fill className="object-contain"/>
                    </div> */}
              </div>
            </div>
            <div className='flex flex-col justify-center text-center bg-white rounded text-sm lg:text-xl w-5/12 lg:w-1/2 h-auto ml-10 lg:ml-20 mr-30'>
              <div className='my-10'>経験者に相談</div>
              <div className='text-xxs lg:text-base'>
                リノベーション経験者の話を
                <br />
                聞くならココ！
              </div>
              <div className='flex justify-center z-10'>
                <div className='w-auto h-auto'>
                  <button className='mt-10 mb-10 lg:mx-40 px-10 lg:px-12 py-5 justify-center rounded-full whitespace-nowrap bg-brown-dark text-white text-xs lg:text-lg'>
                    <Link href={'/consult'} className='hover:text-brown'>
                      詳細を見る
                    </Link>
                  </button>
                </div>
                {/* <div className="relative w-35 h-35 lg:w-55 lg:h-55">
                      <Image src="/forum.svg" alt="Icon" fill className="object-contain"/>
                    </div> */}
              </div>
            </div>
          </div>
          <div className='font-mPlus font-semibold text-brown-dark mt-20 ml-25'>
            小倉の街について
          </div>
          <div className='flex w-full h-auto font-mPlus font-semibold text-brown-dark my-10 mb-20'>
            <div className='flex flex-col justify-center text-center bg-white rounded text-sm lg:text-xl w-5/12 lg:w-1/2 h-auto ml-30'>
              <div className='my-10'>小倉在住者の声</div>
              <div className='text-xxs lg:text-base'>
                小倉に住むって
                <br />
                一体どんな感じ？
              </div>
              <div className='w-auto h-auto'>
                <button className='mt-10 mb-10 lg:mx-40 px-10 lg:px-12 py-5 rounded-full whitespace-nowrap bg-brown-dark text-white text-xs lg:text-lg'>
                  <div className='hover:text-brown'>詳細を見る</div>
                </button>
              </div>
            </div>
            <div className='flex flex-col justify-center text-center bg-white rounded text-sm lg:text-xl w-5/12 lg:w-1/2 h-auto ml-10 lg:ml-20 mr-30'>
              <div className='my-10'>小倉の街の魅力</div>
              <div className='text-xxs lg:text-base'>
                小倉に住む上での魅力を
                <br />
                たっぷりご紹介！
              </div>
              <div className='w-auto h-auto'>
                <button className='mt-10 mb-10 lg:mx-40 px-10 lg:px-12 py-5 rounded-full whitespace-nowrap bg-brown-dark text-white text-xs lg:text-lg'>
                  <div className='hover:text-brown'>詳細を見る</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
