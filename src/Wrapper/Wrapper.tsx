import React from 'react'
// eslint-disable-next-line no-unused-vars
import { StyledWrapper, StyledWrapperProps } from './styled'

type WrapperProps = StyledWrapperProps & {
  [k: string]: any
}

export const Wrapper: React.FC<WrapperProps> = ({
  align,
  flexDirection,
  justify,
  children,
  ...rest
}) => {
  return (
    <StyledWrapper
      align={align}
      flexDirection={flexDirection}
      justify={justify}
      {...rest}
    >
      {children}
    </StyledWrapper>
  )
}
