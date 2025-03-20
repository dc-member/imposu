import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import ForwardEmail from 'next-auth/providers/forwardemail'

import { prisma } from '@/lib/prisma'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    ForwardEmail({
      apiKey: process.env.AUTH_FORWARDEMAIL_KEY,
      from: process.env.AUTH_FORWARDEMAIL_FROM,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
})
