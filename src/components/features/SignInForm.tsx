import { Box, Stack } from '@chakra-ui/react'

import { signIn } from '@/app/auth'
import { Button } from '@/components/ui/Button'
import { Field } from '@/components/ui/Field'
import { Input } from '@/components/ui/Input'

export function SignInForm({ buttonName }: { buttonName: string }) {
  return (
    <form
      action={async (formData) => {
        'use server'
        await signIn('forwardemail', formData)
      }}
    >
      <Box bg={'White.100'} py={{ base: 10, md: 16 }} px={7}>
        <Stack gap={6}>
          <Field label={'メールアドレス'}>
            <Input type="text" name="email" placeholder="xxx@necmos.jp" />
          </Field>
          <Button type={'submit'} variant={'primary'} alignSelf={'center'}>
            {buttonName}
          </Button>
        </Stack>
      </Box>
    </form>
  )
}
