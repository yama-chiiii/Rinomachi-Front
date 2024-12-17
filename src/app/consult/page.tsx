'use client'

import Image from 'next/image'
import { useState } from 'react'

export const Consult = () => {
  const [name, setName] = useState('') // 名前
  const [rubi, setRubi] = useState('') //フリガナ
  const [email, setEmail] = useState('') // メールアドレス
  const [tel, settel] = useState('') //電話番号
  const [prefecture, setPrefecture] = useState('') // 都道府県
  const [city, setCity] = useState('') // 市区町村
  const [address, setAddress] = useState('') // 番地
  const [area, setArea] = useState('') // ご希望のエリア
  const [propertyType, setPropertyType] = useState('') // 物件タイプ
  const [budget, setBudget] = useState('') // 総予算
  const [otherQuestions, setOtherQuestions] = useState('') // その他質問

  const [errors, setErrors] = useState({
    name: '',
    rubi: '',
    email: '',
    tel: '',
    prefecture: '',
    city: '',
    address: '',
  })

  const prefectures = [
    '北海道',
    '青森県',
    '岩手県',
    '宮城県',
    '秋田県',
    '山形県',
    '福島県',
    '茨城県',
    '栃木県',
    '群馬県',
    '埼玉県',
    '千葉県',
    '東京都',
    '神奈川県',
    '新潟県',
    '富山県',
    '石川県',
    '福井県',
    '山梨県',
    '長野県',
    '岐阜県',
    '静岡県',
    '愛知県',
    '三重県',
    '滋賀県',
    '京都府',
    '大阪府',
    '兵庫県',
    '奈良県',
    '和歌山県',
    '鳥取県',
    '島根県',
    '岡山県',
    '広島県',
    '山口県',
    '徳島県',
    '香川県',
    '愛媛県',
    '高知県',
    '福岡県',
    '佐賀県',
    '長崎県',
    '熊本県',
    '大分県',
    '宮崎県',
    '鹿児島県',
    '沖縄県',
  ]

  const propertyTypeOptions = ['一軒家', 'マンション', 'アパート', 'オフィス','その他']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let valid = true

    const newErrors = {
      name: '',
      rubi: '',
      email: '',
      tel: '',
      prefecture: '',
      city: '',
      address: '',
    }

    if (name.trim() === '') {
      newErrors.name = '名前を入力してください。'
      valid = false
    }
    if (rubi.trim() === '') {
      newErrors.rubi = 'フリガナを入力してください。'
      valid = false
    }
    if (email.trim() === '') {
      newErrors.email = 'メールアドレスを入力してください。'
      valid = false
    }
    if (tel.trim() === '') {
      newErrors.tel = '電話番号を入力してください。'
      valid = false
    }
    if (!prefecture) {
      newErrors.prefecture = '都道府県を選択してください。'
      valid = false
    }
    if (city.trim() === '') {
      newErrors.city = '市区町村を入力してください。'
      valid = false
    }
    if (address.trim() === '') {
      newErrors.address = '番地を入力してください。'
      valid = false
    }

    setErrors(newErrors)

    if (valid) {
      console.log('Form Submitted:', { name, email })
      alert('フォームが送信されました！')
    }
  }

  return (
    <div className='w-full min-h-screen flex flex-col items-center font-mPlus font-semibold'>
      <div className='w-full lg:w-1/2 min-h-screen flex flex-col bg-brown-light text-brown-dark'>
        <div className='mt-164 lg:mx-44 bg-white'>
          <div className='w-full items-center lg:pl-52'>
            <div>
              <div className='w-full h-auto items-center flex flex-row pt-24'>
                <Image
                  src='/person_search_brown.svg'
                  width={44}
                  height={64}
                  alt='Icon'
                />
                <div className='text-xl lg:text-3xl'>リノベーション経験者に相談</div>
              </div>
              <div className='-mt-8 whitespace-nowrap lg:-mt-16 mb-8 text-md lg:text-xl text-brown-dark'>
                --------------------------------------------------
              </div>
            </div>
          </div>
          <div className='flex flex-row-reverse'>
            <Image
              src='/fukidasi1.svg'
              width={280}
              height={64}
              alt='Icon'
              className='mx-48 mt-12'
            />
          </div>
          <Image
            src='/fukidasi2.svg'
            width={280}
            height={64}
            alt='Icon'
            className='mx-48'
          />
          <div className='my-40 mx-16 lg:mx-72 px-40 py-16 bg-brown-light text-brown-dark rounded-md'>
            <div className='text-sm lg:text-lg text-center'>そんな悩みをお持ちの方は</div>
            <br />
            <div className='-mt-24 text-sm lg:text-lg text-center'>
              下記フォームより
            </div>
            <div className='text-sm lg:text-lg text-center'>お問い合わせください</div>
          </div>
        </div>
        <div className='mt-72 mx-44 text-2xl text-brown-dark'>
          ご相談・お問い合わせ
        </div>
        <div className='mx-44 bg-white'>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-32 lg:mt-72 mx-2 lg:mx-24'>
            <div className='flex flex-row items-center'>
              <div className='ml-12 lg:ml-44 text-3xs lg:text-xs bg-red-dark text-white px-4 lg:px-16 py-4 lg:py-8 rounded-full'>
                必須
              </div>
              <div className='ml-12 text-brown-dark'>お名前</div>
            </div>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100 ${
                errors.name ? 'border-red-500 border-2' : 'border-gray-300'
              }`}
              placeholder='高専太郎'
            />
            {errors.name && (
              <p className='text-sm text-red-500 mt-1'>{errors.name}</p>
            )}
          </div>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-24 mx-2 lg:mx-24'>
            <div className='flex flex-row items-center'>
            <div className='ml-12 lg:ml-44 text-3xs lg:text-xs bg-red-dark text-white px-4 lg:px-16 py-4 lg:py-8 rounded-full'>
                必須
              </div>
              <div className='ml-12 text-brown-dark'>フリガナ</div>
            </div>
            <input
              id='name'
              type='text'
              value={rubi}
              onChange={(e) => setRubi(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100 ${
                errors.rubi ? 'border-red-500 border-2' : 'border-gray-300'
              }`}
              placeholder='コウセンタロウ'
            />
            {errors.rubi && (
              <p className='text-sm text-red-500 mt-1'>{errors.rubi}</p>
            )}
          </div>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-24 mx-2 lg:mx-24'>
            <div className='flex flex-row items-center'>
            <div className='ml-12 lg:ml-44 text-3xs lg:text-xs bg-red-dark text-white px-4 lg:px-16 py-4 lg:py-8 rounded-full'>
                必須
              </div>
              <div className='ml-12 text-brown-dark'>メールアドレス</div>
            </div>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100 ${
                errors.email ? 'border-red-500 border-2' : 'border-gray-300'
              }`}
              placeholder='1234@gmail.com'
            />
            {errors.email && (
              <p className='text-sm text-red-500 mt-1'>{errors.email}</p>
            )}
          </div>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-24 mx-2 lg:mx-24'>
            <div className='flex flex-row items-center'>
            <div className='ml-12 lg:ml-44 text-3xs lg:text-xs bg-red-dark text-white px-4 lg:px-16 py-4 lg:py-8 rounded-full'>
                必須
              </div>
              <div className='ml-12 text-brown-dark'>電話番号</div>
            </div>
            <input
              id='tel'
              type='tel'
              value={tel}
              onChange={(e) => settel(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100 ${
                errors.tel ? 'border-red-500 border-2' : 'border-gray-300'
              }`}
              placeholder='xxx-xxxx-xxxx'
            />
            {errors.tel && (
              <p className='text-sm text-red-500 mt-1'>{errors.tel}</p>
            )}
          </div>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-24 mx-2 lg:mx-24'>
            <div className='flex flex-row items-center'>
            <div className='ml-12 lg:ml-44 text-3xs lg:text-xs bg-red-dark text-white px-4 lg:px-16 py-4 lg:py-8 rounded-full'>
                必須
              </div>
              <div className='ml-12 text-brown-dark'>都道府県</div>
            </div>
            <select
              id='prefecture'
              value={prefecture}
              onChange={(e) => setPrefecture(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100 ${
                errors.prefecture
                  ? 'border-red-500 border-2'
                  : 'border-gray-300'
              }`}
            >
              <option value='' disabled>
                選択してください
              </option>
              {prefectures.map((pref, index) => (
                <option key={index} value={pref}>
                  {pref}
                </option>
              ))}
            </select>
            {errors.prefecture && (
              <p className='text-sm text-red-500 mt-1'>{errors.prefecture}</p>
            )}
          </div>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-24 mx-2 lg:mx-24'>
            <div className='flex flex-row items-center'>
            <div className='ml-12 lg:ml-44 text-3xs lg:text-xs bg-red-dark text-white px-4 lg:px-16 py-4 lg:py-8 rounded-full'>
                必須
              </div>
              <div className='ml-12 text-brown-dark'>市区町村</div>
            </div>
            <input
              id='name'
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100 ${
                errors.city ? 'border-red-500 border-2' : 'border-gray-300'
              }`}
              placeholder='北九州市小倉南区'
            />
            {errors.city && (
              <p className='text-sm text-red-500 mt-1'>{errors.city}</p>
            )}
          </div>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-24 mx-2 lg:mx-24'>
            <div className='flex flex-row items-center'>
            <div className='ml-12 lg:ml-44 text-3xs lg:text-xs bg-red-dark text-white px-4 lg:px-16 py-4 lg:py-8 rounded-full'>
                必須
              </div>
              <div className='ml-12 text-brown-dark'>町村・番地</div>
            </div>
            <input
              id='name'
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100 ${
                errors.address ? 'border-red-500 border-2' : 'border-gray-300'
              }`}
              placeholder='志井5丁目20-1'
            />
            {errors.address && (
              <p className='text-sm text-red-500 mt-1'>{errors.address}</p>
            )}
          </div>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-24 mx-2 lg:mx-24'>
            <div className='flex flex-row items-center'>
              <div className='ml-12 lg:ml-110 text-brown-dark'>ご希望のエリア</div>
            </div>
            <input
              id='name'
              type='text'
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100 ${'border-gray-300'}`}
              placeholder='小倉北区'
            />
          </div>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-24 mx-2 lg:mx-24'>
            <div className='flex flex-row items-center'>
              <div className='ml-12 lg:ml-110 text-brown-dark'>物件タイプ</div>
            </div>
            <select
              id='propertyType'
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100 ${
                'border-gray-300'
              }`}
            >
              <option value='' disabled>
                選択してください
              </option>
              {propertyTypeOptions.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-24 mx-2 lg:mx-24'>
            <div className='flex flex-row items-center'>
              <div className='ml-12 lg:ml-110 text-brown-dark'>総予算</div>
            </div>
            <input
              id='name'
              type='text'
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100 ${'border-gray-300'}`}
              placeholder='2500円'
            />
          </div>
          <div className='w-full lg:w-4/5 h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-24 mx-2 lg:mx-24'>
          <div className='flex flex-row items-center'>
              <div className='ml-12 lg:ml-110 text-brown-dark'></div>その他
            </div>
            <input
              id='name'
              type='text'
              value={otherQuestions}
              onChange={(e) => setOtherQuestions(e.target.value)}
              className={`w-5/6 lg:w-1/2 ml-12 mt-8 lg:mt-0 lg:ml-0 px-4 py-2 rounded-md focus:ring-2 focus:ring-brown-dark bg-gray-100  ${'border-gray-300'}`}
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <button
            onClick={handleSubmit}
            className='w-1/5 py-3 rounded-md bg-brown-dark text-white hover:opacity-80 mt-48'
          >
            送信
          </button>
        </div>
      </div>
    </div>
  )
}

export default Consult
