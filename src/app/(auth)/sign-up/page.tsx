import { Box, Grid } from '@chakra-ui/react'

import { SignInForm } from '@/components/features/SignInForm'
import { HeaderAuth } from '@/components/layout/(auth)/HeaderAuth'

export default async function SignUpPage() {
  return (
    <Box>
      <HeaderAuth variant={'sign-up'} />
      <Grid
        as={'main'}
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        templateRows={{ base: 'auto auto', md: '1fr' }}
        gap={0}
        h={{ base: 'calc(100vh - 48px)', md: 'calc(100vh - 56px)' }}
      >
        <SignUpPrice />
        <SignInForm buttonName="デモをはじめる" />
      </Grid>
    </Box>
  )
}

function SignUpPrice() {
  return <Box>test</Box>
}
