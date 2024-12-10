import Link from "next/link";
import Header from "./../component/Header";

export default function Search() {
    return (
      <>
        <Header></Header>
        <div className="w-full lg:w-1/2 min-h-screen flex flex-col mx-auto font-mPlus font-semibold text-2xl">
          <div className="w-full h-screen bg-brown-light text-red-dark">
            <div className="bg-white rounded mt-140 mx-30 pb-10">
              <div className="flex border-b border-dashed border-brown-dark w-205 ml-25">
                <img src="/search.svg" alt="Icon" height={35} width={35} />
                <div className="font-mPlus text-brown-dark ">エリアから探す</div>
              </div>
              <div className="flex">
                <div className="m-10 bg-brown-light border border-brown-dark w-100">あ</div>
                <ul>
                  <li className="bg-brown-light border border-brown-dark rounded text-brown-dark font-mPlus font-semibold text-xl flex justify-center w-180 m-10">
                    路線・駅から探す
                  </li>
                  <li className="bg-brown-light border border-brown-dark rounded text-brown-dark font-mPlus font-semibold text-xl flex justify-center w-180 m-10">
                    相場価格から探す
                  </li>
                  <li className="bg-brown-light border border-brown-dark rounded text-brown-dark font-mPlus font-semibold text-xl flex justify-center w-180 m-10">
                    詳細検索
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
      
    );
  }
