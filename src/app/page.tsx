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
        <div className='w-full mt-80 mb-12 px-12 lg:px-60 text-2xl lg:text-4xl text-brown-dark'>
          相談する・探す
        </div>
        <div className='h-auto flex flex-row justify-around mx-4 lg:mx-32 lg:px-20 rounded-md bg-white'>
          {/* 空き家 */}
          <div className='flex flex-col relative items-center px-12 mx-12 mt-24 mb-24 rounded-lg bg-brown-light border-2 border-brown-dark'>
            <div className='absolute -top-12% right-36% px-12 py-12 rounded-full text-center text-md bg-brown-dark'>
              <img src="/home.svg" alt="Icon" className='w-32'/>
            </div>
            <div className='mt-52 text-brown-dark text-center text-xs lg:text-base'>リノベーション可能な<br />空き家を探したい</div>
            <button className='mt-32 mb-12 lg:mx-40 px-12 py-8 rounded-lg bg-brown-dark text-white text-xs lg:text-md'>詳細を見る</button>
          </div>
          <div className='flex flex-col relative items-center px-12 mx-12 mt-24 mb-24 rounded-lg bg-brown-light border-2 border-brown-dark'>
          <div className='absolute -top-12% right-36% px-12 py-12 rounded-full text-center text-md bg-brown-dark'>
              <img src="/tool.svg" alt="Icon" className='w-32'/>
            </div>
            <div className='mt-52 text-brown-dark text-xs lg:text-base text-center'>リノベーションされた<br/>施設・家の例を見たい</div>
            <button className='mt-32 mb-12 lg:mx-40 px-12 py-8 rounded-lg bg-brown-dark text-white text-xs lg:text-md'>詳細を見る</button>
          </div>
          <div className='flex flex-col relative items-center px-12 mx-12 mt-24 mb-24 rounded-lg bg-brown-light border-2 border-brown-dark'>
          <div className='absolute -top-12% right-36% px-12 py-12 rounded-full text-center text-md bg-brown-dark'>
              <img src="/person_search.svg" alt="Icon" className='w-32'/>
            </div>
            <div className='mt-52 text-brown-dark text-xs lg:text-base text-center'>リノベーションの<br></br>経験者に相談したい</div>
            <button className='mt-32 mb-12 lg:mx-40 px-12 py-8 rounded-lg bg-brown-dark text-white text-xs lg:text-md'>詳細を見る</button>
          </div>
        </div>
        <div className='w-full mt-60 mb-12 px-60 text-2xl lg:text-4xl text-brown-dark'>
          小倉の街について
        </div>
        <div className='h-auto flex flex-col items-center mx-32 mb-36 bg-white'>
          <div className='mt-72 font-semibold text-2xl text-black'>そもそも小倉ってどんなまち？</div>
          <div className='-mt-8 lg:-mt-16 mb-8 text-xs lg:text-xl text-brown-dark'>
          ------------------------------------
          </div>
          <div className='mx-64 px-18 py-12 rounded-md text-brown-dark bg-brown-light'>九州の玄関口として位置するのが、この小倉の街。<br/>北九州市の中でも中心的な役割を果たす小倉は、古くから交通や商業の拠点として発展してきました。<br/>小倉は「大きすぎず小さすぎない」ちょうどいいサイズ感のまちで、歴史ある街並みと現代の便利さが共存しています。
            <br />訪れる人々を温かく迎える小倉の街で、小倉の魅力を満喫してください！</div>
            <div className='mt-48 font-semibold text-2xl text-black'>小倉DATA</div>
          <div className='-mt-8 lg:-mt-16 mb-8 text-xs lg:text-xl text-brown-dark'>
          ------------
          </div>
          <div className='w-auto flex flex-row mx-44 mt-16 mb-36'>
            <div className='flex-1 flex flex-col items-center px-40 mx-12 rounded-md bg-brown-light text-brown-dark'>
              <div className='pt-12 text-xs text-center whitespace-nowrap'>子育てしやすい街<br />ランキング</div>
              <div className="mt-12">11年連続</div>
              <div className="lg:text-5xl font-black">1位</div>
            </div>
            <div className='flex-1 flex flex-col items-center px-40 mx-12 rounded-md bg-brown-light text-brown-dark'>
              <div className='pt-12 text-xs text-center whitespace-nowrap'>   生活利便性＆<br />物価家賃</div>
              <div className='mt-4 text-xs text-center'>(小倉北区)</div>
              <div className="mt-12 lg:text-5xl font-black">1位</div>
            </div>
            <div className='flex-1 flex flex-col items-center px-40 mx-12 rounded-md bg-brown-light text-brown-dark'>
              <div className='pt-12 text-xs text-center whitespace-nowrap'>日本新三大夜景都市</div>
              <div className='mt-4 text-xs text-center'>(北九州)</div>
              <div className="mt-28 lg:text-5xl font-black">1位</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
