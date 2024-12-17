'use client' // クライアントコンポーネントとして明示

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function ConditionalHeader() {
  const pathname = usePathname()

  // Headerを非表示にしたいページのパス
  const hideHeaderPaths = ['/signin', '/signup']

  // pathnameが非表示対象のパスに含まれる場合は何も表示しない
  if (hideHeaderPaths.includes(pathname)) return null

  return <Header />
}
