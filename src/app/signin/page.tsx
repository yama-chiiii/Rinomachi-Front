export default function Signin() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-brown-light font-mPlus font-semibold">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md text-brown-dark">
        <h1 className="text-4xl lg:text-5xl text-bold mt-120 mb-8 text-center">リノマチ！</h1>
        <div className="text-xl lg:text-2xl text-opacity-75 mb-30 text-center">サインイン</div>
        <div className="mx-10 mb-10">
          <label htmlFor="username" className="block mb-2 text-lg">
            ユーザーネーム
          </label>
          <input
            id="username"
            type="text"
            placeholder="ユーザーネームを入力"
            className="w-full px-4 py-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark"
          />
        </div>
        <div className="mx-10 mb-10">
          <label htmlFor="email" className="block mb-2 text-lg">
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            className="w-full px-4 py-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark"
          />
        </div>
        <div className="mx-10 mb-10">
          <label htmlFor="password" className="block mb-2 text-lg">
            パスワード
          </label>
          <input
            id="password"
            type="password"
            placeholder="パスワードを入力"
            className="w-full px-4 py-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark"
          />
        </div>
        <div className="mt-30 mx-10 text-center border-b border-brown-dark">
          <button
            type="submit"
            className="w-full px-6 py-10 mb-35 bg-brown-dark text-white text-lg font-bold rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-light"
          >
            サインイン
          </button>
        </div>
        <div className="mx-10 mt-35 text-center">
          <button
            type="submit"
            className="w-full px-6 py-10 bg-brown text-brown-dark text-lg font-bold rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-light"
          >
            新規登録
          </button>
        </div>
        
      </div>
    </div>
  )
}
