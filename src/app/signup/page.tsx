"use client"

export const Signup = () => {

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    try {
      // APIコール
      await window.fetch("http://localhost:8080/users", {
        method: "POST",
        body: JSON.stringify(data),
      });

      window.alert("送信しました。");

      // 完了時に入力値をクリア
      form.reset();
    } catch (e) {
      console.log(e);
    }
  };
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-brown-light font-mPlus font-semibold">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-brown-dark">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">新規登録</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 text-lg">
                ユーザーネーム
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="ユーザーネームを入力"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-lg">
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-lg">
                パスワード
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="パスワードを入力"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-brown-dark text-white text-lg font-bold rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-light"
              >
                新規登録
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  export default Signup
