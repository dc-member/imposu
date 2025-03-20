import { Field as ChakraField, Text } from '@chakra-ui/react'
import { forwardRef, ReactNode } from 'react'

export interface FieldProps extends Omit<ChakraField.RootProps, 'label'> {
  label?: ReactNode
  helperText?: ReactNode
  errorText?: ReactNode
  isOptional?: boolean
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(function Field(
  props,
  ref
) {
  const {
    label,
    children,
    helperText,
    errorText,
    isOptional = false,
    ...rest
  } = props
  return (
    <ChakraField.Root ref={ref} {...rest}>
      {label && (
        <ChakraField.Label mb={2}>
          {label}
          {isOptional ? null : (
            <Text as={'span'} color={'Secondary.100'}>
              *
            </Text>
          )}
        </ChakraField.Label>
      )}
      {helperText && (
        <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
      )}
      {children}
      {errorText && <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>}
    </ChakraField.Root>
  )
})
