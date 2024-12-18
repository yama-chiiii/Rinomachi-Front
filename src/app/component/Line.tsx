"use client";
import { useState } from 'react';

function CheckBox({name,id,setIsChecked}:{name:string,id:string,setIsChecked:() => void}){
    const handleChange = () => {
        setIsChecked();
    };
    return(
        <div className="flex items-center space-x-3">
            <input
                type="checkbox"
                id={id}
                onChange={handleChange}
                className="w-15 h-15 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="checkbox" className="text-gray-700 font-medium">
                {name}
            </label>
        </div>
    );
}

function LineCheckBox({name,id,setIsChecked,setLine}:{name:string,id:string,setIsChecked:() => void,setLine:() => void}){
    const handleChange = () => {
        setLine();
        setIsChecked();
    };
    return(
        <div className="flex items-center space-x-3">
            <input
                type="checkbox"
                id={id}
                onChange={handleChange}
                className="w-15 h-15 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="checkbox" className="text-gray-700 font-medium">
                <div className="font-bold">
                    {name}
                </div>
            </label>
        </div>
    );
}

export default function Line(){
    const [isChecked,setIsChecked] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [line,setLine] = useState("JQ");

    return(
        <>
            <div className="w-full flex flex-col mx-auto mb-32 font-mPlus font-semibold text-2xl">
                <div className="w-full h-full bg-brown-light text-red-dark">
                    <div className="bg-white rounded mt-120 mb-20 mx-30 pr-15 pb-20">
                        <div className="flex border-b border-dashed border-brown-dark w-205 pt-20 ml-20">
                            <div className="font-mPlus text-brown-dark">路線・駅から探す</div>
                        </div>
                        <div className="flex w-full h-auto">
                            <div className="flex-col text-xl">
                                <div>
                                    <div className="ml-20 mt-15 mb-5"><LineCheckBox name="鹿児島本線" id="鹿児島本線" setIsChecked={() => setIsChecked(!isChecked)} setLine={() => setLine("鹿児島本線")}/></div>
                                    <div className="flex flex-wrap gap-5 ml-45">
                                        <CheckBox name="小倉" id="鹿児島本線" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="西小倉" id="鹿児島本線" setIsChecked={() => setIsChecked(!isChecked)}/>
                                    </div>
                                </div>
                                <div>
                                    <div className="ml-20 mt-15 mb-5"><LineCheckBox name="日豊本線" id="日豊本線" setIsChecked={() => setIsChecked(!isChecked)} setLine={() => setLine("日豊本線")}/></div>
                                    <div className="flex flex-wrap gap-5 ml-45">
                                        <CheckBox name="小倉" id="日豊本線" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="西小倉" id="日豊本線" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="南小倉" id="日豊本線" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="城野" id="日豊本線" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="安部山公園" id="日豊本線" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="下曽根" id="日豊本線" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="小倉" id="日豊本線" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="朽網" id="日豊本線" setIsChecked={() => setIsChecked(!isChecked)}/>
                                    </div>
                                </div>
                                <div>
                                    <div className="ml-20 mt-15 mb-5"><LineCheckBox name="北九州モノレール" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)} setLine={() => setLine("北九州モノレール")}/></div>
                                    <div className="flex flex-wrap gap-5 ml-45">
                                        <CheckBox name="小倉" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="平和通" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="旦過" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="香春口三萩野" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="片野" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="城野" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="北方" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="競馬場前" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="守恒" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="徳力公団前" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="徳力嵐山口" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="志井" id="北九州モノレール" setIsChecked={() => setIsChecked(!isChecked)}/>
                                        <CheckBox name="企救丘" id="北九州モノレール"  setIsChecked={() => setIsChecked(!isChecked)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    );
}