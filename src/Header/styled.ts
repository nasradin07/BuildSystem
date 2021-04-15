import styled from 'styled-components'

export type StyledHeaderProps = { color?: string }

export const StyledHeader = styled.div<StyledHeaderProps>(
  ({ color }) => `
    width: 100%;
    background: ${!color ? 'fff' : color}
    box-sizing: border-box;
    margin: 0;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 1.5715;
    list-style: none;
    position: relative;
    padding: 16px 24px;
    background-color: #fff;
`
)
