import Header from './component/Header'

export default function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold '>
      <Header />
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
          <div className='absolute -top-24% right-8% px-12 py-28 rounded-full text-center text-md bg-red-dark text-white'>
            はじめての
            <br />
            人向け
          </div>
          <button className='w-full mx-32 py-32 bg-brown text-2xl lg:text-5xl text-white rounded-lg'>
            リノベーションとは？
          </button>
        </div>
        <div className='w-full mt-80 mb-12 px-60 text-2xl lg:text-4xl text-brown-dark'>
          相談する・探す
        </div>
        <div className='w-full h-auto flex flex-row justify-around bg-white'>
          {/* 空き家 */}
          <div className='flex flex-col items-center mt-24 mb-36 rounded-lg bg-brown-light border-2 border-brown-dark'>
            <img src="/home.svg" alt="Icon"/>
            <div className='mt-60 px-20 text-brown-dark text-center'>リノベーション可能な<br />空き家を探したい</div>
            <button className='mt-36 mb-24 mx-40 px-32 py-8 rounded-lg bg-brown-dark text-white'>詳細を見る</button>
          </div>
          {/* 例*/}
          <div className='flex flex-col items-center mt-24 mb-36 rounded-lg bg-brown-light border-2 border-brown-dark'>
            <img src="/tool.svg" alt="Icon"/>
            <div className='mt-60 px-20 text-brown-dark text-center'>リノベーションされた<br/>施設・家の例を見たい</div>
            <button className='mt-36 mb-24 mx-40 px-32 py-8 rounded-lg bg-brown-dark text-white'>詳細を見る</button>
          </div>
          {/* 相談*/}
          <div className='flex flex-col items-center mt-24 mb-36 rounded-lg bg-brown-light border-2 border-brown-dark'>
            <img src="/personSearch.svg" alt="Icon"/>
            <div className='mt-60 px-20 text-brown-dark text-center'>リノベーション経験者に<br/>相談をしたい</div>
            <button className='mt-36 mb-24 mx-40 px-32 py-8 rounded-lg bg-brown-dark text-white'>詳細を見る</button>
          </div>
        </div>
      </div>
    </div>
  )
}
