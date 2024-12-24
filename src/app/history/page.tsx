// 'use client';

// import { useEffect, useState } from 'react';
// import House from '../component/House';
// import { useAuth } from '../context/AuthContext';

// type Rireki = {
//   id: number;
//   uid: string;
//   bid: string;
//   createdAt: string;
//   updatedAt: string;
// };

// type Building = {
//   bid: string;
//   address: string;
//   structure: string;
//   floors: number;
//   age: number;
//   area: number;
//   contract: string;
//   description: string;
//   is_available: boolean;
//   price: number;
//   transportation: string;
// };

// const History = () => {
//   const { isLoggedIn, username, userId } = useAuth();
//   const [, setHistories] = useState<Rireki[]>([]);
//   const [buildings, setBuildings] = useState<Building[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchHistoriesAndBuildings = async () => {
//       try {
//         setLoading(true);

//         const historyResponse = await fetch(`http://localhost:8080/users/${userId}/histories/`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!historyResponse.ok) {
//           throw new Error(`履歴情報取得エラー: ${historyResponse.status}`);
//         }

//         const historyData: Rireki[] = await historyResponse.json();
//         setHistories(historyData);

//         const buildingIds = historyData.map((r) => r.bid);
//         if (buildingIds.length > 0) {
//           const buildingResponse = await fetch(
//             `http://localhost:8080/buildings?bids=${buildingIds.join(',')}`,
//             {
//               method: 'GET',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//             }
//           );

//           if (!buildingResponse.ok) {
//             throw new Error(`建物情報取得エラー: ${buildingResponse.status}`);
//           }

//           const buildingData = await buildingResponse.json();
//           setBuildings(buildingData);
//         }
//       } catch (error) {
//         setError(
//           error instanceof Error
//             ? error.message
//             : 'サーバーとの通信でエラーが発生しました。'
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isLoggedIn) {
//       fetchHistoriesAndBuildings();
//     }
//   }, [isLoggedIn, userId]);

//   if (!isLoggedIn) {
//     return (
//       <div className="w-full min-h-screen flex flex-col items-center justify-center">
//         <p className="text-gray-600">ログインしてください。</p>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="w-full min-h-screen flex flex-col items-center bg-gray-200">
//         <p className="text-gray-600 text-lg mb-4">履歴を読み込み中...</p>
//         <div className="w-1/2 h-8 bg-gray-300 mb-4 rounded animate-pulse"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full min-h-screen flex flex-col items-center justify-center">
//         <div className="bg-red-100 text-red-700 p-6 rounded-lg">
//           履歴取得中にエラーが発生しました:
//           <br />
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center font-mPlus font-semibold ">
//       <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-start px-40 bg-brown-light text-red-dark">
//         <div className="mt-180 text-2xl lg:text-5xl text-brown-dark text-center">
//           履歴一覧
//         </div>
//         <div className="-mt-8 lg:-mt-16 mb-12 text-xxs lg:text-lg text-brown-dark">
//           --------------------
//         </div>
//         <div className="text-lg">{username}さんの履歴一覧</div>
//         <div className="w-full flex justify-center">
//           <div className="w-11/12 min-h-screen mt-12 bg-white">
//             {buildings.length > 0 ? (
//               buildings.map((building) => (
//                 <House
//                   key={building.bid}
//                   housetype={building.contract === '賃貸' ? '賃貸' : '売買'}
//                   name={building.description}
//                   address={building.address}
//                   floors={building.floors}
//                   structure={building.structure}
//                   price={building.price}
//                   age={building.age}
//                   area={building.area}
//                 />
//               ))
//             ) : (
//               <p className="text-gray-500 text-center">履歴はありません。</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default History;
'use client';

import { useEffect, useState } from 'react';
import House from '../component/House';
import { useAuth } from '../context/AuthContext';

type Building = {
  bid: string;
  address: string;
  structure: string;
  floors: number;
  age: number;
  area: number;
  contract: string;
  description: string;
  is_available: boolean;
  price: number;
  transportation: string;
};

const mockHistories = [
  { id: 1, uid: 'user123', bid: 'building123', createdAt: '2023-01-01', updatedAt: '2023-01-02' },
  { id: 2, uid: 'user123', bid: 'building456', createdAt: '2023-01-03', updatedAt: '2023-01-04' },
];

const mockBuildings: Building[] = [
  {
    bid: 'building123',
    address: '東京都渋谷区1-1-1',
    structure: '鉄筋コンクリート',
    floors: 10,
    age: 5,
    area: 50,
    contract: '賃貸',
    description: 'ぼろや',
    is_available: true,
    price: 200000,
    transportation: '徒歩5分',
  },
  {
    bid: 'building456',
    address: '神奈川県横浜市2-2-2',
    structure: '木造',
    floors: 2,
    age: 20,
    area: 100,
    contract: '売買',
    description: '変な家',
    is_available: true,
    price: 35000000,
    transportation: 'バス10分',
  },
  {
    bid: 'building789',
    address: '埼玉県さいたま市3-3-3',
    structure: '鉄骨造',
    floors: 5,
    age: 10,
    area: 80,
    contract: '賃貸',
    description: '便利な駅近物件',
    is_available: true,
    price: 150000,
    transportation: '徒歩3分',
  },
];

const History = () => {
  const { isLoggedIn, username } = useAuth();
  const [buildings, setBuildings] = useState<Building[]>([]);

  useEffect(() => {
    // モックデータを履歴に基づいてフィルタリング
    const historyBids = mockHistories.map((history) => history.bid);
    const filteredBuildings = mockBuildings.filter((building) =>
      historyBids.includes(building.bid)
    );
    setBuildings(filteredBuildings);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600">ログインしてください。</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center font-mPlus font-semibold ">
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-start px-40 bg-brown-light text-red-dark">
        <div className="mt-180 text-2xl lg:text-5xl text-brown-dark text-center">
          履歴一覧
        </div>
        <div className="-mt-8 lg:-mt-16 mb-12 text-xxs lg:text-lg text-brown-dark">
          --------------------
        </div>
        <div className="text-lg">{username}さんの履歴一覧</div>
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-11/12 min-h-screen mt-12 bg-white">
            {buildings.length > 0 ? (
              buildings.map((building) => (
                <House
                  key={building.bid}
                  housetype={building.contract === '賃貸' ? '賃貸' : '売買'}
                  name={building.description}
                  address={building.address}
                  floors={building.floors}
                  structure={building.structure}
                  price={building.price}
                  age={building.age}
                  area={building.area} buildingId={''}                />
              ))
            ) : (
              <p className="text-gray-500 text-center">履歴はありません。</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

