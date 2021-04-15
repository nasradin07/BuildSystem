import React from 'react'
// eslint-disable-next-line no-unused-vars
import { StyledHeader, StyledHeaderProps, StyledHeaderWrapper } from './styled'

type HeaderProps = StyledHeaderProps & {
  fontSize: number
}

export const Header: React.FC<HeaderProps> = ({
  fontSize,
  children,
  ...rest
}) => {
  return (
    <StyledHeaderWrapper fontSize={fontSize}>
      <StyledHeader {...rest}>{children}</StyledHeader>
    </StyledHeaderWrapper>
  )
}
