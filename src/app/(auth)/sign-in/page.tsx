import { Box } from '@chakra-ui/react'

import { SignInForm } from '@/components/features/SignInForm'
import { HeaderAuth } from '@/components/layout/(auth)/HeaderAuth'

export default function SignInPage() {
  return (
    <>
      <HeaderAuth variant={'sign-in'} />
      <Box as={'main'}>
        <SignInForm buttonName="マジックリンクでログインする" />
      </Box>
    </>
  )
}
