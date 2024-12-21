"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import House from "../component/House";

function HouseListContent() {
  const searchParams = useSearchParams();
  const [conditions, setConditions] = useState<string[]>([]);

  useEffect(() => {
    // クエリパラメータから条件を取得
    const conditionsParam = searchParams.get("conditions");
    if (conditionsParam) {
      setConditions(conditionsParam.split(",")); // 条件を配列に変換
    }
  }, [searchParams]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center font-mPlus font-semibold">
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-center bg-brown-light text-brown-dark">
        <div className="w-full lg:w-11/12 h-12 z-10 mt-140 rounded-t-md bg-brown-dark"></div>
        <div className="w-full lg:w-11/12 h-auto -m-12 flex items-center mx-54 rounded-md bg-white text-brown-dark py-28 px-36">
          <div className="flex flex-row flex-wrap ml-10 gap-4">
            {conditions.length > 0 ? (
              conditions.map((condition, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-md lg:text-2xl text-brown-dark"
                >
                  {condition}
                </span>
              ))
            ) : (
              <span>条件が選択されていません</span>
            )}
          </div>
          <div className="text-md lg:text-2xl text-dark-brown">の物件</div>
        </div>
        <div className="w-full lg:w-11/12 mt-32 bg-white">
          <House housetype="賃貸" name="住宅A" address="福岡県北九州市小倉南区志井5丁目20-2" />
          <House housetype="売買" name="住宅B" address="福岡県北九州市小倉南区志井5丁目20-2" />
          <House housetype="売買" name="住宅C" address="福岡県北九州市小倉南区志井5丁目20-2" />
        </div>
      </div>
    </div>
  );
}

export default function HouseList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HouseListContent />
    </Suspense>
  );
}
