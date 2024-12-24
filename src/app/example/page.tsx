import Image from "next/image";
import Link from "next/link";

const Example = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center font-mPlus text-border-brown-dark font-semibold '>
            <div className='w-full lg:w-1/2 min-h-screen items-center bg-brown-light text- font-mPlus'>
                <div className='mt-100 mx-12 mb-20 py-20 px-30 rounded bg-white text-brown-dark'>
                    <div className="flex w-260 mb-45 border-b border-dashed border-brown-dark">
                        <Image src="/handyman.svg" alt="Icon" height={35} width={35}/>
                        <div className="text-2xl">
                            リノベーション事例
                        </div>
                    </div>
                    <div className="py-20 px-15 rounded bg-brown-light mb-20">
                        <div className=" text-lg lg:text-xl mb-20">
                            ◯リノベーション施設事例
                        </div>
                        <div className="flex flex-wrap justify-evenly mb-30">
                            <div className="mx-15 my-10">
                                <div>
                                    01 | TangaTable
                                </div>
                                <Image src="/TangaTable.png" alt="Image" height={105} width={200} />
                                <Link href="https://tangatable.jp/" className="text-brown text-xxs">
                                    https://tangatable.jp/
                                </Link>
                                <div className="mt-10 text-xxs">
                                    北九州のまちの「あじわい」を届ける<br/>食堂兼宿泊施設
                                </div>
                            </div>
                            <div className="mx-15 my-10">
                                <div>
                                    02 | 秘密基地
                                </div>
                                <Image src="/Himitukichi.png" alt="Image" height={105} width={200} />
                                <Link href="https://coworking802.com/" className="text-brown text-xxs">
                                    https://coworking802.com/
                                </Link>
                                <div className="mt-10 text-xxs">
                                    JR小倉駅から徒歩３分の<br/>コワーキングスペース
                                </div>
                            </div>
                            <div className="mx-15 my-10">
                                <div>
                                    03 | 船場広場
                                </div>
                                <Image src="/FunabaHiroba.png" alt="Image" height={105} width={200} />
                                <Link href="https://www.senbahiroba.com/" className="text-brown text-xxs">
                                    https://www.senbahiroba.com/
                                </Link>
                                <div className="mt-10 text-xxs">
                                    小倉井筒屋の隣にある、憩いと賑わいの広場
                                </div>
                            </div>
                            <div className="mx-15 my-10">
                                <div>
                                    04 | comichiかわらぐち
                                </div>
                                <Image src="/comichiKawaraguchi.png" alt="Image" height={105} width={200} />
                                <Link href="https://comichi.info/" className="text-brown text-xxs">
                                    https://comichi.info/
                                </Link>
                                <div className="mt-10 text-xxs">
                                    ママと家族がイキイキ輝ける場所
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 px-15 rounded bg-brown-light mb-20">
                            <div className="text-lg lg:text-xl lg:text-xl">
                                ◯リノベーションハウス事例
                            </div>
                            <div className="text-xs lg:text-lg border-b border-brown-dark my-10 w-300 lg:w-440 hover:text-brown">
                                <Link href="https://www.sunken.co.jp/reform/1943/">
                                    ・【北九州市 木の家リノベ】故郷に帰れば安住の家
                                </Link>
                            </div>
                            <div className="text-xs lg:text-lg border-b border-brown-dark my-10 w-300 lg:w-440 hover:text-brown">
                                <Link href="https://www.reform-kitakyusyu.jp/works/works-43080/">
                                    ・北九州市小倉南区 自宅リノベーション　小山様邸
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Example;