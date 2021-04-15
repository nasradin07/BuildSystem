import React from 'react'
import {
  StyledFlexElement,
  // eslint-disable-next-line no-unused-vars
  StyledFlexElementProps,
  StyledWrapper
} from './styled'

type FlexElementProps = StyledFlexElementProps & {
  color?: string
}

export const FlexElement: React.FC<FlexElementProps> = ({
  color,
  children,
  ...rest
}) => {
  return (
    <StyledWrapper color={color}>
      <StyledFlexElement {...rest}>{children}</StyledFlexElement>
    </StyledWrapper>
  )
}
