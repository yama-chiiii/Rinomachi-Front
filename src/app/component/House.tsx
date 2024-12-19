import Image from 'next/image'

export default function House() {
  return (
    <div className='w-full min-h-screen font-mPlus font-semibold'>
      <div className='w-full flex flex-col lg:flex-row justify-center bg-white mt-32 text-brown-dark'>
        {/* 左半分 */}
        <div className='flex flex-col justify-start mx-12'>
          <div className='flex flex-row items-center mt-20'>
            {/* タグ */}
            <div className='px-4 lg:px-8 py-2 rounded-md bg-green-light text-white text-xs lg:text-md '>
              賃貸
            </div>
            <div className='px-8 text-md lg:text-xl'>住宅A</div>
          </div>
          <Image
            src='/houseEX_1.svg'
            width={200}
            height={64}
            alt='house1'
            className='mt-12'
          />
        </div>
        {/* →半分 */}
        <div className='flex flex-col mx-8 lg:mx-12 mt-24 lg:mt-60'>
          {/* 所在地 */}
          <div className='flex flex-col -ml-6 lg:-ml-0  lg:flex-row lg:items-center items-start'>
            <div className='mx-8 px-8 py-4 rounded-md text-xs lg:text-md border-2 border-brown text-brown-dark bg-brown-light'>
              所在地
            </div>
            <div className='mt-4 lg:mt-0 mx-12 lg:mx-0 text-brown-dark text-xs lg:text-lg'>
              福岡県北九州市小倉南区志井5丁目20-2
            </div>
          </div>
          <div className='flex flex-col -ml-6 lg:-ml-0 lg:flex-row items-start lg:items-center mt-12'>
            <div className='mx-8 px-8 py-4 rounded-md text-xs lg:text-md border-2 border-brown text-brown-dark bg-brown-light'>
              最寄駅
            </div>
            <div className='mt-4 lg:mt-0 mx-12 lg:mx-0 text-brown-dark  text-xs lg:text-lg'>
              モノレール志井　徒歩10分
            </div>
          </div>
          {/* テーブル */}
          <table className='mt-20 border border-collapse border-brown-light w-full text-center lg:ml-8'>
            <thead>
              <tr className='bg-brown-light text-brown-dark text-xxs lg:text-xs'>
                <th className='py-4 lg:px-6 border-2 border-brown '>階数</th>
                <th className='py-4 lg:px-6 border-2 border-brown'>構造</th>
                <th className='py-4 lg:px-6 border-2 border-brown'>家賃</th>
                <th className='py-4 lg:px-6 border-2 border-brown'>築年数</th>
                <th className='py-4 lg:px-6 border-2 border-brown'>床面積</th>
                <th className='py-4 lg:px-6 border-2 border-brown'>詳細</th>
              </tr>
            </thead>
            <tbody className='text-xs lg:ttext-sm'>
              <tr>
                <td className='py-4 px-6 border-2 border-brown'>2</td>
                <td className='py-4 px-6 border-2 border-brown'>木造</td>
                <td className='py-4 px-6 border-2 border-brown'>7.77万円</td>
                <td className='py-4 px-6 border-2 border-brown'>100年</td>
                <td className='py-4 px-6 border-2 border-brown'>1000m²</td>
                <td className='py-4 px-6 border-2 border-brown '>
                  <button className='bg-yellow-light px-8 py-4 rounded-md bg-brown text-white '>
                    詳細を見る
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
