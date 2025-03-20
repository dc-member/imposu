'use client'

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
  DrawerTriggerProps,
  Text,
  Stack,
  Box,
  DrawerActionTrigger,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { ReactNode } from 'react'

import { Button } from '@/components/ui/Button'
import { Link } from '@/components/ui/Link'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const bounce = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
  75% { transform: scale(0.98); }
`

type MenuLinkProps = {
  href: string
  children: ReactNode
  delay: number
}

const MenuLink = ({ href, children, delay }: MenuLinkProps) => {
  return (
    <Link
      href={href}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      py={3}
      borderBottom={'1px solid'}
      borderColor={'Gray.200'}
      fontWeight={'bold'}
      fontSize={'lg'}
      _hover={{ color: 'Primary.100' }}
      opacity={0}
      css={{
        animation: `${slideUp} 0.2s ease-out forwards`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
      <Box as={'span'} fontSize={'sm'}>
        ▶︎
      </Box>
    </Link>
  )
}

export function HamburgerMenuLP({ ...props }: DrawerTriggerProps) {
  return (
    <DrawerRoot>
      <DrawerBackdrop
        bgColor={'rgba(0, 0, 0, 0.7)'}
        animation={`${fadeIn} 0.3s ease-in-out`}
      />
      <DrawerTrigger
        asChild
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        gap={1}
        color={'DarkGray.100'}
        {...props}
      >
        <Text
          fontSize={'sm'}
          fontWeight={'900'}
          lineHeight={1}
          textDecoration={'underline'}
        >
          MENU
        </Text>
      </DrawerTrigger>
      <DrawerContent
        bg={'White.100'}
        color={'Black.100'}
        position={'fixed'}
        top={0}
        right={0}
        left={0}
        w={'100vw'}
        h={'100vh'}
        maxW={'100%'}
        m={0}
        pt={7}
        pb={12}
        px={7}
        animation={`${fadeIn} 0.2s ease-in-out`}
      >
        <DrawerHeader display={'flex'} justifyContent={'flex-end'} p={0} mb={8}>
          <DrawerActionTrigger
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
          >
            <Text
              fontSize={'sm'}
              fontWeight={'900'}
              lineHeight={1}
              textDecoration={'underline'}
            >
              CLOSE
            </Text>
          </DrawerActionTrigger>
        </DrawerHeader>
        <DrawerBody p={0}>
          <Stack>
            <DrawerActionTrigger
              display={'flex'}
              flexDir={'column'}
              alignItems={'stretch'}
              gap={6}
            >
              <MenuLink href={'/'} delay={0.1}>
                トップ
              </MenuLink>
              <MenuLink href={'/pricing'} delay={0.2}>
                料金
              </MenuLink>
              <MenuLink href={'/merit'} delay={0.3}>
                インポス請求書のメリット
              </MenuLink>
              <MenuLink href={'/sign-in'} delay={0.4}>
                ログイン
              </MenuLink>
            </DrawerActionTrigger>
          </Stack>
        </DrawerBody>
        <DrawerFooter
          p={0}
          mt={10}
          display={'flex'}
          justifyContent={'center'}
          opacity={0}
          css={{
            animation: `${fadeIn} 0.5s ease-out forwards`,
            animationDelay: '0.6s',
          }}
        >
          <Button
            variant={'cta'}
            w={'100%'}
            maxW={'320px'}
            py={6}
            fontSize={'md'}
            url={'/checkout'}
            css={{
              animation: `${bounce} 0.6s ease-in-out`,
              animationDelay: '1s',
            }}
          >
            今すぐ0.4%手数料をゼロにする
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  )
}
