import House from "../component/House";

export default function houseList() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold '>
      <div className='w-full lg:w-1/2 min-h-screen flex flex-col items-center bg-brown-light text-brown-dark'>
      <div className="w-full lg:w-11/12 h-12 z-10 mt-140 rounded-t-md bg-brown-dark"></div>
        <div className="w-full lg:w-11/12 h-auto -m-12 flex items-center mx-54 rounded-md bg-white text-brown-dark py-28 px-36">
          <div className="text-md lg:text-2xl text-dark-brown">選択条件の表示</div>
        </div>
        <div className="w-full lg:w-11/12 mt-32 bg-white">
          <House/>
        </div>
      </div>
    </div>
  )
}
