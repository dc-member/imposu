import { Box, Flex, Grid } from '@chakra-ui/react'

import { LogoLink } from '@/components/layout/(common)/LogoLink'
import { HamburgerMenuLP } from '@/components/layout/(lp)/HamburgerMenuLP'
import { Button } from '@/components/ui/Button'
import { Link } from '@/components/ui/Link'

export function HeaderLP() {
  return (
    <Box
      as={'header'}
      borderBottom={'1px dashed'}
      borderColor={'DarkGray.100'}
      h={{ base: '60px', md: '72px' }}
    >
      <Grid
        className="max6XL px7"
        templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr' }}
        py={{ base: 3, md: 4 }}
        mx={'auto'}
      >
        {/* Logo */}
        <LogoLink />

        {/* Nav */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          justifyContent={'center'}
          alignItems={'center'}
          gap={8}
        >
          <NavLink href={'/pricing'}>料金</NavLink>
          <NavLink href={'/merit'}>メリット</NavLink>
        </Flex>

        {/* Hamburger Menu */}
        <Flex justifyContent={'flex-end'} alignItems={'center'} gap={4}>
          <Button
            url={'/sign-in'}
            variant={'secondary'}
            display={{ base: 'none', md: 'block' }}
          >
            ログイン
          </Button>
          <HamburgerMenuLP display={{ base: 'block', md: 'none' }} />
        </Flex>
      </Grid>
    </Box>
  )
}

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      color={'DarkGray.100'}
      fontSize={'sm'}
      fontWeight={'700'}
      transition={'color 0.1s ease-in'}
      _hover={{ color: 'Primary.100' }}
    >
      {children}
    </Link>
  )
}
