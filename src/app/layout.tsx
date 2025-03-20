import { Metadata } from 'next'

import { Provider } from '@/app/provider'

export const metadata: Metadata = {
  title: 'Imposu',
  description: 'Imposu',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
