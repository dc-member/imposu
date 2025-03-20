import { Box, BoxProps, Flex, Heading, Text } from '@chakra-ui/react'

type Props = {
  title: string
  titleJP: string
} & BoxProps

export function H1PageTitleAuth({ title, titleJP, ...props }: Props) {
  return (
    <Box borderBottom={'1px dashed'} borderColor={'Border.100'} {...props}>
      <Flex
        flexDir={'column'}
        className={'max6XL px7'}
        py={{ base: 16, md: 20, lg: 24 }}
        h={'100%'}
        justifyContent={{ base: 'flex-start', md: 'flex-start' }}
      >
        <Heading as={'h1'} fontSize={'2xl'} fontWeight={'bold'}>
          {title}
        </Heading>
        <Text fontSize={'15px'} py={2} fontWeight={'600'} color={'Gray.200'}>
          {titleJP}
        </Text>
      </Flex>
    </Box>
  )
}
