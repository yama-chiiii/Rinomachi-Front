import Header from "@/app/component/Header"

export default function Search() {
    return (
      <>
        <Header></Header>
        <div className="w-full min-h-screen flex flex-col items-center font-mPlus font-semibold text-2xl">
          <div className="w-full h-screen bg-brown-light text-red-dark">
            <div className="bg-white mt-140 mx-30">
              <div className="font-mPlus text-brown-dark">エリアから探す</div>
            </div>
          </div>
        </div>
      </>
      
    );
  }
