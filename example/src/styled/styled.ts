import { Header, Wrapper, FlexElement } from 'buildjs'
import styled from 'styled-components'

export const StyledHeader = styled(Header)`
  background-color: #fcfcff;
  text-align: center;
  height: 56px;
`

export const StyledWrapper = styled(Wrapper)`
  background-color: #fff;
  height: 50vh;
`

export const StyledFlexElement = styled(FlexElement)`
  background-color: lightblue;
  height: 100px;
  text-align: center;
  border: 1px solid firebrick;
  border-radius: 4px;
  min-width: 100px;
`

export const OptionsWrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
`
