import styled from 'styled-components'
export type StyledWrapperProps = {
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  wrap?: boolean
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
  align?: 'center' | 'start' | 'end'
}

export const StyledWrapper = styled.div<StyledWrapperProps>(
  ({
    flexDirection = 'row',
    wrap = false,
    justify = 'center',
    align = 'start'
  }) => `
  display: flex;
  flex-direction: ${flexDirection};
  flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
  justify-content: ${justify};
  align-items: ${align}
`
)
