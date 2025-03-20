import { BreadcrumbRootProps, Flex, Icon, Text } from '@chakra-ui/react'
import { IconHome } from '@tabler/icons-react'

import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from '@/components/ui/ChakraBreadcrumb'
import { Link } from '@/components/ui/Link'

type BreadcrumbItem = {
  label: string
  href?: string
  isCurrentPage?: boolean
}

type BreadcrumbProps = {
  items?: BreadcrumbItem[]
  isBlog?: boolean
} & BreadcrumbRootProps

export function Breadcrumb({
  items,
  isBlog = false,
  ...props
}: BreadcrumbProps) {
  return (
    <BreadcrumbRoot
      className="maxW7xl"
      px={isBlog ? { base: 0, md: 0, lg: 0 } : { base: 8, md: 10, lg: 20 }}
      py={2}
      {...props}
    >
      <Flex
        alignItems={'center'}
        flexWrap={'wrap'}
        gapX={2}
        gapY={1}
        fontSize={'xs'}
      >
        <BreadcrumbLink
          href={isBlog ? '/blog' : '/'}
          _focus={{ outline: 'none', boxShadow: 'none' }}
        >
          <Icon>
            <IconHome />
          </Icon>
        </BreadcrumbLink>

        {items?.map((item, index) => (
          <Flex key={index}>
            <Text mr={1}>/</Text>
            {item.isCurrentPage ? (
              <BreadcrumbCurrentLink>{item.label}</BreadcrumbCurrentLink>
            ) : (
              <Link
                href={item.href || '#'}
                color="#52525b"
                _hover={{ color: '#27272a', textDecor: 'none' }}
              >
                {item.label}
              </Link>
            )}
          </Flex>
        ))}
      </Flex>
    </BreadcrumbRoot>
  )
}
