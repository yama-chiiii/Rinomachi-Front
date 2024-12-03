export default function Header(){
    return(
        <div className="z-50">
            <div className="fixed w-full flex top-0">
                <button type="button" className="top-0 bg-brown-dark flex text-white font-mPlus px-20 py-25 font-semibold text-xl">
                    リノマチ！
                </button>
                <div className="flex ml-auto mr-5">
                    <div className="ml-10 pt-5">
                        <button type="button" className="w-36 h-36">
                            <img src="/watch.svg" alt="Icon"/>
                        </button>
                        <div className="font-mPlus font-semibold text-xs">最近見た</div>
                    </div>
                    <div className="ml-10 pt-5">
                        <button type="button" className="pl-13 w-36 h-36">
                            <img src="/description.svg" alt="Icon"/>
                        </button>
                        <div className="font-mPlus font-semibold text-xs">保存した条件</div>
                    </div>
                    <div className="ml-10 pt-5">
                        <button type="button" className="pl-6 w-36 h-36">
                            <img src="/favorite.svg" alt="Icon"/>
                        </button>
                        <div className="font-mPlus font-semibold text-xs">おきにいり</div>
                    </div>
                    <div className="ml-10 pt-5">
                        <button type="button" className="w-36 h-36">
                            <img src="/person.svg" alt="Icon"/>
                        </button>
                        <div className="font-mPlus font-semibold text-xs">ログイン</div>
                    </div>
                </div>
            </div>
        </div>
    );
}