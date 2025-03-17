'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { system } from '@/app/theme'

export function Provider({ children }: { children: ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}
