import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold '>

      <div className='w-full lg:w-1/2 min-h-screen flex flex-col items-center bg-brown-light text-red-dark'>
        <div className='mt-164 text-5xl lg:text-6xl text-brown-dark'>
          リノマチ！
        </div>
        <div className='mt-16'>
          <div className='text-xs lg:text-xl text-brown-dark'>
            小倉の空き家を リノベーションの力でステキな場所に…！
          </div>
          <div className='-mt-8 lg:-mt-16 text-xs lg:text-xl text-brown-dark'>
            ---------------------------------------------------------
          </div>
        </div>
        <div className='w-full flex justify-center relative mt-64'>
          {/* 要修正 */}
          <div className='absolute -top-44% right-12% lg:right-8% px-8 lg:px-12 py-20 lg:py-32 rounded-full text-center text-xs lg:text-lg bg-red-dark text-white'>
            はじめての
            <br />
            人向け
          </div>
          <button className='w-full mx-32 py-32 bg-brown text-2xl lg:text-5xl text-white rounded-lg'>
            リノベーションとは？
          </button>
        </div>

        <div className='w-full mt-60 mb-12 px-60 text-2xl lg:text-4xl text-brown-dark'>
          相談する・探す
        </div>
        <div className='w-4/5 lg:w-auto h-auto flex flex-col lg:flex-row justify-around mx-4 pb-20 py-12 lg:mx-32 px-12 lg:px-20 rounded-md bg-white'>
          {/* 空き家 */}
          <div className='flex flex-col relative items-center lg:px-12 mx-12 mt-24 mb-24 rounded-lg bg-brown-light border-2 border-brown-dark'>
            <div className='absolute -top-12% right-46% lg:right-36% px-12 py-12 rounded-full text-center text-md bg-brown-dark'>
              <Image src="/home.svg" width={32} height={32} alt='Icon'/>
            </div>
            <div className='mt-52 text-brown-dark text-center text-xl lg:text-base'>
              リノベーション可能な
              <br />
              空き家を探したい
            </div>

            <button className='mt-32 mb-12 lg:mx-40 px-32 lg:px-12 py-16 rounded-lg whitespace-nowrap bg-brown-dark text-white text-md'>
              <Link href={"./search"} className='hover:text-brown'>詳細を見る</Link>
            </button>
          </div>

          <div className='flex flex-col relative items-center px-12 mx-12 mt-24 mb-24 rounded-lg bg-brown-light border-2 border-brown-dark'>
            <div className='absolute -top-12% right-46% lg:right-36% px-12 py-12 rounded-full text-center text-md bg-brown-dark'>
              <Image src="/tool.svg" width={32} height={32} alt='Icon'/>
            </div>
            <div className='mt-52 text-brown-dark text-xl lg:text-base text-center'>
              リノベーションされた
              <br />
              施設・家の例を見たい
            </div>
            <button className='mt-32 mb-12 lg:mx-40 px-32 lg:px-12 py-16 rounded-lg whitespace-nowrap bg-brown-dark text-white text-md'>
              詳細を見る
            </button>
          </div>
          <div className='flex flex-col relative items-center px-12 mx-12 mt-24 mb-24 rounded-lg bg-brown-light border-2 border-brown-dark'>
            <div className='absolute -top-12% right-46% lg:right-36% px-12 py-12 rounded-full text-center text-md bg-brown-dark'>
              <Image src="/person_search.svg" width={32} height={32} alt='Icon'/>
            </div>
            <div className='mt-52 text-brown-dark text-xl lg:text-base text-center'>
              リノベーションの<br></br>経験者に相談したい
            </div>
            <button className='mt-32 mb-12 lg:mx-40 px-32 lg:px-12 py-16 rounded-lg whitespace-nowrap bg-brown-dark text-white text-md'>
              詳細を見る
            </button>
          </div>
        </div>
        <div className='w-full mt-60 mb-12 px-60 text-2xl lg:text-4xl text-brown-dark'>
          小倉の街について
        </div>
        <div className='h-auto flex flex-col items-center lg:mx-32 mb-36 bg-white'>
          <div className='mt-72 font-semibold text-xl lg:text-2xl text-black'>
            そもそも小倉ってどんなまち？
          </div>
          <div className='-mt-8 lg:-mt-16 mb-8 text-md lg:text-xl text-brown-dark'>
            ------------------------------------
          </div>
          <div className='w-4/5 mx-20 lg:mx-64 px-18 py-12 rounded-md text-brown-dark bg-brown-light text-sm lg:text-base'>
            九州の玄関口として位置するのが、この小倉の街。
            <br />
            北九州市の中でも中心的な役割を果たす小倉は、古くから交通や商業の拠点として発展してきました。
            <br />
            小倉は「大きすぎず小さすぎない」ちょうどいいサイズ感のまちで、歴史ある街並みと現代の便利さが共存しています。
            <br />
            訪れる人々を温かく迎える小倉の街で、小倉の魅力を満喫してください！
          </div>
          <div className='mt-48 font-semibold text-xl lg:text-2xl text-black'>
            小倉DATA
          </div>
          <div className='-mt-8 lg:-mt-16 mb-8 text-md lg:text-xl text-brown-dark'>
            ------------
          </div>
          <div className='w-5/6 flex flex-col lg:flex-row items-center lg:justify-center box-border lg:mx-44 mx-4 mt-16 mb-36'>
            <div className='w-3/4 lg:w-3/5 mx-4 lg:mx-12 pt-8 mb-16 lg:mb-0 flex flex-col items-center rounded-md bg-brown-light text-brown-dark'>
              <div className='h-4/5 flex flex-col items-center box-border'>
                <div className='text-md lg:text-sm text-center whitespace-nowrap'>
                  子育てしやすい街
                  <br />
                  ランキング
                </div>
                <div className='text-lg mt-8'>11年連続</div>
              </div>
              <div className='w-1/4 h-1/5 flex flex-col-reverse items-center'>
                <Link
                  href={'https://tohohome.jp/kitaq/blog/2657/'}
                  className='text-5xl font-black whitespace-nowrap hover:text-red-dark'
                >
                  1位
                </Link>
              </div>
            </div>
            <div className='w-3/4 lg:w-3/5 mx-4 lg:mx-12 pt-8 mb-16 lg:mb-0 flex flex-col items-center rounded-md bg-brown-light text-brown-dark'>
              <div className='h-4/5 flex flex-col items-center box-border'>
                <div className='text-md lg:text-sm text-center whitespace-nowrap'>
                  生活利便性＆
                  <br />
                  物価家賃
                </div>
                <div className='text-sm mb-12'>(小倉北区)</div>
              </div>
              <div className='w-1/4 h-1/5 flex flex-col-reverse items-center'>
                <Link
                  href={'https://kitaq.media/82961/'}
                  className='text-5xl font-black whitespace-nowrap hover:text-red-dark'
                >
                  1位
                </Link>
              </div>
            </div>
            <div className='w-3/4 lg:w-3/5 mx-4 lg:mx-12 pt-8 mb-16 lg:mb-0 flex flex-col items-center rounded-md bg-brown-light text-brown-dark'>
              <div className='h-4/5 flex flex-col items-center box-border'>
                <div className='mt-14 text-md lg:text-sm text-center whitespace-nowrap'>
                  日本新三大夜景都市
                </div>
                <div className='text-sm mb-20'>(北九州)</div>
              </div>
              <div className='w-1/4 h-1/5 flex flex-col items-center'>
                <Link
                  href={'https://jptop3.yakeikentei.jp/'}
                  className='text-5xl font-black whitespace-nowrap hover:text-red-dark'
                >
                  1位
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
