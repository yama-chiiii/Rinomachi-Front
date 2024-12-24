'use client'

import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react';
import House from '../component/House';

type Favorite = {
  uid: string;
  bid: string;
};

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
  favorites: number;
};

const Favorite = () => {
  const { likes } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { userId } = useAuth();


  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setLoading(true);

        const response = await fetch(`http://localhost:8080/users/${userId}/favorites`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTPエラー: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const favorites: Favorite[] = await response.json();

        // 建物詳細を取得
        const buildingPromises = favorites.map(async (favorite) => {
          const buildingResponse = await fetch(`http://localhost:8080/buildings/${favorite.bid}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!buildingResponse.ok) {
            throw new Error(`Building fetch error for bid ${favorite.bid}`);
          }

          return buildingResponse.json() as Promise<Building>;
        });

        const buildingData = await Promise.all(buildingPromises);
        setBuildings(buildingData);
      } catch (error) {
        console.error('エラー内容:', error);
        setError(
          error instanceof Error
            ? error.message
            : 'サーバーから予期しないエラーが発生しました。'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold'>
      <div className='w-full lg:w-1/2 px-20 min-h-screen flex flex-col items-center bg-brown-light text-brown-dark'>
        <div className="w-full mt-140 bg-white">
          <div className='w-170 lg:w-230 mt-12 mx-20 mb-20 border-b border-dashed border-brown-dark text-2xl lg:text-4xl text-brown-dark'>
          お気に入り一覧
        </div>
        <div className='-mt-8 lg:-mt-16 mb-12 text-xxs lg:text-lg text-brown-dark'>
          ------------------------------------
        </div>
        {loading ? (
          <p>読み込み中...</p>
        ) : buildings.length === 0 ? (
          <p>お気に入りがまだありません。</p>
        ) : (
          <div className="w-full lg:w-11/12 mt-32 bg-white">
            {buildings.map((building) => (
              <House
                key={building.bid}
                buildingId={building.bid}
                housetype={building.contract === '賃貸' ? '賃貸' : '売買'}
                name={building.description}
                address={building.address}
                floors={building.floors}
                structure={building.structure}
                price={building.price}
                age={building.age}
                area={building.area}
              />
            ))}
          </div>

          {favoriteItems.length === 0 ? (
          <p className='mt-12 mx-20 mb-20'>お気に入りがまだありません。</p>
          ) : (
            <div className='flex justify-center'>
                <div className='w-11/12 max-w-4xl flex flex-col justify-center space-y-10 mb-20 '>
                  {favoriteItems.map(([name]) => (
                    <div
                      key={name}
                      className='w-full  p-4 border border-gray-300 rounded-md shadow-sm bg-white'
                    >
                      <div className='flex justify-between items-center'>
                        <h2 className='text-xl font-semibold'>{name}</h2>
                        <div
                          className='font-hachi text-red-dark cursor-pointer'
                          onClick={() => toggleLike(name)}
                        >
                          ♥
                        </div>
                      </div>

                      {/* 画像 */}
                      <Image
                        src='/houseEX_1.svg'
                        width={200}
                        height={64}
                        alt={name}
                        className='mt-12'
                      />

                      <div className='mt-4'>
                        <p>この建物をお気に入りに登録しました。</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
