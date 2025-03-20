'use client'

import { Box, Flex, Stack, Text } from '@chakra-ui/react'

import { H1PageTitleAuth } from '@/components/layout/(auth)/H1PageTitleAuth'
import { HeaderAuth } from '@/components/layout/(auth)/HeaderAuth'
import { Button } from '@/components/ui/Button'
import { useClearFormToken } from '@/hooks/useClearFormToken'

export default function ContactThanksPage() {
  useClearFormToken()

  return (
    <>
      <HeaderAuth variant={'sign-up'} />
      <H1PageTitleAuth title={'THANKS'} titleJP={'トライアル申込み完了'} />
      <Box bg={'White.100'}>
        <Stack
          className={'max6XL px7'}
          py={{ base: 10, md: 20, lg: 20 }}
          gap={24}
          bg={'White.100'}
          borderBottom={'1px dashed'}
          borderColor={'DarkGray.100'}
        >
          <Text fontSize={'15px'}>
            トライアル版のお申し込みが完了しました。
            <br />
            <br />
            内容を確認の上、担当者より返信させていただきます。
          </Text>
          <Flex justify={'center'}>
            <Button variant="primary" url="/">
              トップへ戻る
            </Button>
          </Flex>
        </Stack>
      </Box>
    </>
  )
}
