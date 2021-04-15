import React from 'react'
// eslint-disable-next-line no-unused-vars
import { StyledHeader, StyledHeaderProps } from './styled'

type HeaderProps = StyledHeaderProps & {
  [k: string]: any
}

export const Header: React.FC<HeaderProps> = ({ color, children, ...rest }) => {
  return (
    <StyledHeader color={color} {...rest}>
      {children}
    </StyledHeader>
  )
}
