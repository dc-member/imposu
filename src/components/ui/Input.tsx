import { Input as ChakraInput, InputProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

type CustomInputProps = InputProps & {
  isInvalid?: boolean
}

export const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ isInvalid, ...props }, ref) => {
    return (
      <ChakraInput
        ref={ref}
        outline="none"
        fontSize={'md'}
        _focus={{
          borderColor: 'Primary.100',
          boxShadow: '0 0 0 1px #5B74FF',
        }}
        borderColor={isInvalid ? 'red.500' : undefined}
        _hover={{
          borderColor: isInvalid ? 'red.500' : undefined,
        }}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
