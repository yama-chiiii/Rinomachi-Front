import Link from "next/link";
import Header from "./../component/Header";

export default function Search() {
    return (
      <>
        <div className="w-full lg:w-1/2 min-h-screen flex flex-col mx-auto font-mPlus font-semibold text-2xl">
          <div className="w-full h-full bg-brown-light text-red-dark">
            <div className="bg-white rounded mt-120 mb-20 mx-30">
              <div className="flex border-b border-dashed border-brown-dark w-205 pt-20 ml-20">
                <img src="/search.svg" alt="Icon" height={35} width={35} />
                <div className="font-mPlus text-brown-dark">エリアから探す</div>
              </div>
              <div className="lg:flex z-30">
                <div className="relative flex lg:ml-25 m-20 bg-brown-light border border-brown-dark rounded">
                  <button type="button" className="flex rounded-full bg-red-dark font-mPlus font-semibold text-white text-sm justify-center items-center w-69 h-69 p-20 absolute top-10 left-10">
                    小倉北区
                  </button>
                  <div className="flex justify-center w-full h-auto">
                    <img src="/kokura.svg" alt="map" height={200} width={200} className="my-10 lg:mx-50"/>
                  </div>
                  <button type="button" className="flex rounded-full bg-brown font-mPlus font-semibold text-white text-sm justify-center items-center w-69 h-69 p-20 absolute bottom-10 right-10">
                    小倉南区
                  </button>
                </div>
                <ul className="w-full lg:w-1/2">
                  <li className="flex justify-center">
                    <button type="button" className="bg-brown-light border border-brown-dark rounded text-brown-dark font-mPlus font-semibold text-xl lg:w-11/12 py-22 my-10 lg:my-20">
                      <div>路線・駅から探す</div>
                    </button>
                  </li>
                  <li className="flex justify-center">
                    <button type="button" className="bg-brown-light border border-brown-dark rounded text-brown-dark font-mPlus font-semibold text-xl lg:w-11/12 py-22 my-10 lg:my-20">
                      <div>相場価格から探す</div>
                    </button>
                  </li>
                  <li className="flex justify-center">
                    <button type="button" className="bg-brown-light border border-brown-dark rounded text-brown-dark font-mPlus font-semibold text-xl lg:w-11/12 py-22 my-10 lg:my-20">
                      <div>詳細検索</div>
                    </button>          
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
      
    );
  }
