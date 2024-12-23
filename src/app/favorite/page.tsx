'use client';

import { useAuth } from '../context/AuthContext';

const Favorite = () => {
    const { likes } = useAuth(); // AuthContext から likes を取得

  // いいねされたアイテムだけをフィルタリング
  const favoriteItems = Object.entries(likes).filter(([, value]) => value);

  return (
    <div className="w-full min-h-screen flex flex-col items-center font-mPlus font-semibold">
      <h1 className="text-2xl font-bold my-8">お気に入り一覧</h1>

      {favoriteItems.length === 0 ? (
        <p>お気に入りがまだありません。</p>
      ) : (
        <div className="w-full max-w-4xl flex flex-col space-y-4">
          {favoriteItems.map(([name]) => (
            <div
              key={name}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm bg-white"
            >
              <h2 className="text-xl font-semibold">{name}</h2>
              <p>この建物をお気に入りに登録しました。</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
