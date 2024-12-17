import Image from 'next/image'

export const Consult = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold'>
      <div className='w-full lg:w-1/2 min-h-screen flex flex-col bg-brown-light text-brown-dark'>
        <div className='mt-164 mx-44 bg-white'>
          <div className='w-full pl-52'>
            <div>
              <div className='w-full h-auto flex flex-row pt-24'>
                <Image
                  src='/person_search_brown.svg'
                  width={44}
                  height={64}
                  alt='Icon'
                />
                <div className='text-3xl'>リノベーション経験者に相談</div>
              </div>
              <div className='-mt-8 whitespace-nowrap lg:-mt-16 mb-8 text-md lg:text-xl text-brown-dark'>
                --------------------------------------------------
              </div>
            </div>
          </div>
          <div className='flex flex-row-reverse'>
            <Image src='/fukidasi1.svg' width={280} height={64} alt='Icon' className='mx-48 mt-12' />
          </div>
          <Image src='/fukidasi2.svg' width={280} height={64} alt='Icon' className='mx-48' />
          <div className='my-40 mx-56 px-76 py-16 bg-brown-light text-brown-dark rounded-md'>
            <div className='text-center'>そんな悩みをお持ちの方は</div><br/><div className='-mt-24 text-center'>下記フォームよりお問い合わせください</div>
          </div>
        </div>
        <div className='mt-72 mx-44 text-2xl text-brown-dark'>ご相談・お問い合わせ</div>
        <div className='mx-44 bg-white'>
          <div className='flex flex-row items-center mt-72'>
            <div className='ml-44 text-xs bg-red-dark text-white px-16 py-8 rounded-full'>必須</div>
            <div className='ml-16 text-brown-dark text-lg'>お名前</div>
            <input className='border-brown-dark rouded-md '></input>
          </div>
          <div className='mt-24'>お名前</div>
          <div className='mt-24'>お名前</div>
          <div className='mt-24'>お名前</div>
          <div className='mt-24'>お名前</div>
          <div className='mt-24'>お名前</div>
          <div className='mt-24'>お名前</div>
          <div className='mt-24'>お名前</div>
          <div className='mt-24'>お名前</div>
          <div className='mt-24'>お名前</div>
          <div className='mt-24'>お名前</div>
        </div>
      </div>
    </div>
  )
}

export default Consult
