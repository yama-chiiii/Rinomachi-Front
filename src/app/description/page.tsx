import Image from 'next/image'
import Link from 'next/link'

const Description = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus text-border-brown-dark font-semibold '>
      <div className='w-full lg:w-1/2 min-h-screen flex flex-col items-center bg-brown-light font-mPlus'>
        <div className='mt-200 text-2xl lg:text-5xl text-brown-dark'>
          リノベーションについて
        </div>
        <div className='-mt-8 lg:-mt-16 mb-12 text-xxs lg:text-lg text-brown-dark'>
          ------------------------------------------------------
        </div>
        <div className='lg:w-11/12 w-full h-auto rounded-md bg-white'>
          <div className='mt-44 mx-44 bg-brown-light rounded-md'>
            <div>
              <div className='mx-24 pt-16 lg:pt-16 text-sm lg:text-lg text-brown-dark'>
                もくじ
              </div>
              <div className='text-brown-dark font-black text-xs lg:text-md mx-28 -mt-8 lg:-mt-12 lg:mb-8'>
                ───
              </div>
            </div>
            <div className='mx-24 text-brown-dark mb-12 lg:mb-4 text-md lg:text-xl'>
              〇リノベーションとは
            </div>
            <div className='mx-24 text-brown-dark pb-16 text-md lg:text-xl'>
              <span className='block lg:inline'>〇リノベーションと</span>
              <span className='block lg:inline lg:ml-0 ml-16'>
                リフォームの違い
              </span>
            </div>
          </div>
          <div className='mx-24 mt-40 text-md lg:text-xl text-brown-dark'>
            〇リノベーションとは…
          </div>
          <div className='flex justify-center'>
            {/* block クラス：要素をブロック要素として表示し、改行します。
                inline クラス：要素をインライン要素として表示し、改行しません。
                hidden クラス：指定された画面サイズでは<br>タグを非表示にします。 */}
            <div className='mx-24 text-center lg:text-start lg:mx-0 mt-20 border-b-2 border-brown-dark text-md lg:text-2xl'>
              <span className='block lg:inline'>
                中古住宅を現代の暮らしに合わせて
              </span>
              <span className='block lg:inline'>よみがえらせること</span>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-32 mx-20 px-4 lg:mx-60 text-sm rounded-md text-brown-dark border-4 border-dashed border-brown'>
            <div className='my-12'>
              リノベーション（renovation）とは、
              <br />
              既存の建物や空間に対して大規模な改修や改善を行い、
              <br />
              元の状態を大きく超える価値や機能を生み出すことを指します。
              <br />
              これは単なる修繕や原状回復（リフォーム）とは異なり、
              <br />
              新しいアイデアやデザイン、技術を取り入れることで、
              <br />
              空間の用途や魅力を根本的に変えることを目指します。
            </div>
            <Image
              src='/reno_house.svg'
              width={120}
              height={36}
              alt='Icon'
              className='mt-28 hidden sm:block'
            />
          </div>
          <div className='mt-52 mx-12 lg:mx-24 text-md lg:text-xl text-brown-dark'>
            〇リノベーションとリフォームの違い
          </div>
          <div className='mt-24 mx-24 pl-24 text-lg text-brown-dark'>
            日本の建築業界では
          </div>
          <div className='mt-8 bg-brown-light rounded-md mx-48 mb-16'>
            <div className='px-24 py-16 text-sm lg:text-lg text-brown-dark'>
              老朽化した建築物を新築時に近い状態に戻す「原状回復」を目的とした
              <br />
              改修は「リフォーム」
            </div>
          </div>
          <div className='mt-8 bg-brown-light rounded-md mx-48'>
            <div className='px-24 py-16 text-sm lg:text-lg text-brown-dark'>
              新たに建築物を住まいを作り変えて、性能・間取り・デザインを刷新し、
              <br />
              npm 新たな価値を生み出すような大規模な改修を「リノベーション」
            </div>
          </div>
          <div className='flex flex-row-reverse'>
            <div className='mt-12 text-sm lg:text-lg text-brown-dark'>
              として使い分けられているそうです。
            </div>
          </div>
          <div className='flex flex-col items-center mt-48 mb-36'>
            <div className='text-brown-dark text-md lg:text-xl'>
              リノベーション事例はこちら
            </div>
            <div className='text-brown-dark -mt-8 lg:-mt-12 text-xs lg:text-lg font-black'>
              ────────────────
            </div>
          </div>
        </div>
        <button className='py-12 px-18 mb-130 rounded-md bg-brown-dark text-white mt-48'>
          <Link href={'/'}>ホームに戻る</Link>
        </button>
      </div>
    </div>
  )
}

export default Description
