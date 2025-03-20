import {
  ButtonProps,
  Button as ChakraButton,
  Link as ChakraLink,
  Box,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode, useMemo } from 'react'

type Props = {
  variant: 'primary' | 'secondary' | 'cta'
  children: ReactNode
  url?: string
  isExternal?: boolean
} & ButtonProps

export function Button({
  variant,
  children,
  url,
  isExternal = false,
  ...props
}: Props) {
  const buttonTransition = 'cubic-bezier(0.22, 1, 0.36, 1)'
  const buttonHeight = '48px'

  const style: ButtonProps = useMemo(() => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'Primary.100',
          color: 'White.100',
          boxShadow: '0px 2px 0px 1px rgba(0, 117, 194, 0.2)',
          transition: `box-shadow 0.2s ${buttonTransition}, transform 0.2s ${buttonTransition}, background-color 0.2s ${buttonTransition}`,
          _hover: {
            transform: 'translateY(2px)',
            boxShadow: 'none',
          },
          h: buttonHeight,
        }
      case 'secondary':
        return {
          bg: 'White.100',
          color: 'Primary.100',
          border: '1px solid',
          boxShadow: '0px 2px 0px 1px rgba(0, 117, 194, 0.2)',
          transition: `box-shadow 0.2s ${buttonTransition}, transform 0.2s ${buttonTransition}, background-color 0.2s ${buttonTransition}`,
          _hover: {
            bg: 'Primary.500',
            transform: 'translateY(2px)',
            boxShadow: 'none',
          },
          h: buttonHeight,
        }
      case 'cta':
        return {
          bg: 'Tertiary.100',
          color: 'Black.100',
          boxShadow: '0px 2px 0px 1px rgba(255, 165, 0, 0.2)',
          transition: `box-shadow 0.2s ${buttonTransition}, transform 0.2s ${buttonTransition}, background-color 0.2s ${buttonTransition}`,
          _hover: {
            transform: 'translateY(2px)',
            boxShadow: 'none',
          },
          h: buttonHeight,
        }
      default:
        return {
          h: buttonHeight,
        }
    }
  }, [variant, buttonTransition])

  const content = (
    <>
      {children}
      <Box
        as={'span'}
        display={'inline-block'}
        ml={'8px'}
        position={'relative'}
        transition={`all 0.2s ${buttonTransition}`}
      >
        <svg
          stroke={'currentColor'}
          fill={'none'}
          width={'12'}
          height={'12'}
          viewBox={'0 0 10 10'}
          aria-hidden={'true'}
          style={{
            width: '12px',
            height: '12px',
            strokeWidth: '2px',
          }}
        >
          <path
            d={'M0 5h7'}
            stroke={'currentColor'}
            strokeWidth={'2'}
            opacity={'0'}
            className={'pathOpacity'}
            style={{
              transition: `opacity 0.2s ${buttonTransition}`,
            }}
          />
          <path
            d={'M1 1l4 4-4 4'}
            stroke={'currentColor'}
            strokeWidth={'2'}
            className={'pathTranslate'}
            style={{
              transition: `transform 0.2s ${buttonTransition}`,
            }}
          />
        </svg>
      </Box>
    </>
  )

  if (url) {
    return (
      <ChakraButton
        {...style}
        borderRadius={'md'}
        fontSize={'md'}
        fontWeight={'900'}
        css={{
          '&:hover .pathOpacity': { opacity: 1 },
          '&:hover .pathTranslate': { transform: 'translateX(3px)' },
        }}
        {...props}
      >
        <ChakraLink
          as={NextLink}
          fontWeight={'900'}
          href={url}
          px={5}
          display={'flex'}
          justifyContent={'center'}
          w={'100%'}
          h={buttonHeight}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          color={style.color}
          _hover={{ textDecoration: 'none' }}
          _focus={{ outline: 'none' }}
        >
          {content}
        </ChakraLink>
      </ChakraButton>
    )
  }

  return (
    <ChakraButton borderRadius={'md'} fontWeight={'900'} {...style} {...props}>
      {content}
    </ChakraButton>
  )
}
