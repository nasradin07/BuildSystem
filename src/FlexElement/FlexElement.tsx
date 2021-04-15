import React from 'react'
// eslint-disable-next-line no-unused-vars
import { StyledFlexElement, StyledFlexElementProps } from './styled'

type FlexElementProps = StyledFlexElementProps & {
  [k: string]: any
}

export const FlexElement: React.FC<FlexElementProps> = ({
  column,
  children,
  ...rest
}) => {
  return (
    <StyledFlexElement column={column} {...rest}>
      {children}
    </StyledFlexElement>
  )
}
