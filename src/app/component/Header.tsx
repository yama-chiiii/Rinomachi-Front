export default function Header(){
    return(
        <div className="flex justify-center z-50">
            <div className="w-full lg:w-1/2 flex fixed top-0">
                <button type="button" className="top-0 bg-brown-dark flex text-white font-mPlus px-20 py-20 font-bold text-xl">
                    リノマチ!
                </button>
                <div className="flex items-center ml-auto mr-5">
                    <div className="ml-10 pt-14">
                        <button type="button" className="pl-3 w-38 h-35">
                            <img src="/watch.svg" alt="Icon"/>
                        </button>
                        <div className="font-mPlus font-semibold text-xxs">
                            最近見た
                        </div>
                    </div>
                    <div className="ml-10 pt-14">
                        <button type="button" className="pl-13 w-48 h-35">
                            <img src="/description.svg" alt="Icon"/>
                        </button>
                        <div className="font-mPlus font-semibold text-xxs">
                            保存した条件
                        </div>
                    </div>
                    <div className="ml-10 pt-14">
                        <button type="button" className="pl-7 w-42 h-35">
                            <img src="/favorite.svg" alt="Icon"/>
                        </button>
                        <div className="font-mPlus font-semibold text-xxs">
                            おきにいり
                        </div>
                    </div>
                    <div className="ml-10 pt-14">
                        <button type="button" className="pl-3 w-38 h-35">
                            <img src="/person.svg" alt="Icon"/>
                        </button>
                        <div className="font-mPlus font-semibold text-xxs">
                            ログイン
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}