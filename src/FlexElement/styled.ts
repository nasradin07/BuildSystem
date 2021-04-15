import styled from 'styled-components'

export type StyledFlexElementProps = {
  column: number
}

export const StyledFlexElement = styled.div<StyledFlexElementProps>(
  ({ column }) => `
 flex: ${column / 24};
`
)
