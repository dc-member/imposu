import { Box, Flex, FlexProps, Grid, GridProps } from '@chakra-ui/react'
import Image from 'next/image'

import { LogoLink } from '@/components/layout/(common)/LogoLink'
import { APP_NAME } from '@/components/pageData'

type Props = {
  variant?: 'sign-up' | 'sign-in'
}

export function HeaderAuth({ variant = 'sign-up' }: Props) {
  const HeaderStyle: FlexProps = {
    as: 'header',
    borderBottom: '1px dashed',
    borderColor: 'DarkGray.100',
    w: '100%',
    height: { base: '60px', md: '72px' },
    alignItems: 'center',
  }

  const GridStyle: GridProps = {
    className: 'max6XL px7',
    templateColumns: '1fr 1fr',
    py: { base: 3, md: 4 },
    mx: 'auto',
    alignItems: 'center',
    h: '100%',
    w: '100%',
  }

  if (variant === 'sign-up') {
    return (
      <Flex {...HeaderStyle}>
        <Grid {...GridStyle}>
          <Box position={'relative'} w={'158px'} h={'22px'}>
            <Image
              src={'/common/imposu-logo.svg'}
              alt={`${APP_NAME}のロゴ`}
              priority
              fill
              sizes="158px"
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
      </Flex>
    )
  } else if (variant === 'sign-in') {
    return (
      <Flex {...HeaderStyle}>
        <Grid {...GridStyle}>
          <LogoLink />
        </Grid>
      </Flex>
    )
  }

  return null
}
