import React, { useState } from 'react'
import {
  StyledHeader,
  StyledWrapper,
  StyledFlexElement
} from '../styled/styled'
import { Align, FlexDirection, Justify } from '../types/wrapper'
import { OptionsComponent } from './OptionsComponent'

const BasicUsage = () => {
  const [align, setAlign] = useState<Align>('start')
  const [justify, setJustify] = useState<Justify>('center')
  const [flexDirection, setFlexDirection] = useState<FlexDirection>('row')

  return (
    <div>
      <StyledHeader fontSize={14}>Basic Usage</StyledHeader>
      <OptionsComponent
        align={align}
        setAlign={setAlign}
        justify={justify}
        flexDirection={flexDirection}
        setJustify={setJustify}
        setFlexDirection={setFlexDirection}
      />
      <StyledWrapper
        align={align}
        justify={justify}
        flexDirection={flexDirection}
      >
        <StyledFlexElement column={6}>1</StyledFlexElement>
        <StyledFlexElement column={6}>2</StyledFlexElement>
        <StyledFlexElement column={6}>3</StyledFlexElement>
      </StyledWrapper>
    </div>
  )
}

export default BasicUsage
