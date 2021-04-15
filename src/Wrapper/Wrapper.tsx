import React from 'react'
// eslint-disable-next-line no-unused-vars
import { StyledWrapper, StyledWrapperProps } from './styled'

type WrapperProps = StyledWrapperProps

export const Wrapper: React.FC<WrapperProps> = ({ children, ...rest }) => {
  return <StyledWrapper {...rest}>{children}</StyledWrapper>
}
