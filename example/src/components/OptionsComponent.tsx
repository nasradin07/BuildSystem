import React from 'react'
import { Wrapper, FlexElement } from 'buildjs'
import { Select } from 'antd'
import { Align, FlexDirection, Justify } from '../types/wrapper'
import { OptionsWrapper } from '../styled/styled'
const { Option } = Select

type OptionComponentProps = {
  align: Align
  setAlign: React.Dispatch<React.SetStateAction<Align>>
  justify: Justify
  setJustify: React.Dispatch<React.SetStateAction<Justify>>
  flexDirection: FlexDirection
  setFlexDirection: React.Dispatch<React.SetStateAction<FlexDirection>>
}

export const OptionsComponent: React.FC<OptionComponentProps> = ({
  align,
  setAlign,
  justify,
  setFlexDirection,
  flexDirection,
  setJustify
}) => {
  return (
    <OptionsWrapper>
      <Wrapper>
        <FlexElement column={6}>
          <div>Align</div>
          <Select value={align} onChange={(value) => setAlign(value)}>
            <Option value={'center'}>Center</Option>
            <Option value={'start'}>Start</Option>
            <Option value={'end'}>End</Option>
          </Select>
        </FlexElement>
        <FlexElement column={6}>
          <div>Flex direction</div>
          <Select
            value={flexDirection}
            onChange={(value) => setFlexDirection(value)}
          >
            <Option value={'column'}>Column</Option>
            <Option value={'column-reverse'}>Column Reverse</Option>
            <Option value={'row'}>Row</Option>
            <Option value={'row-reverse'}>Row Reverse</Option>
          </Select>
        </FlexElement>
        <FlexElement column={6}>
          <div>Justify</div>
          <Select value={justify} onChange={(value) => setJustify(value)}>
            <Option value={'center'}>Center</Option>
            <Option value={'flex-start'}>Flex Start</Option>
            <Option value={'flex-end'}>Flex End</Option>
            <Option value={'space-around'}>Space around</Option>
            <Option value={'space-between'}>Space between</Option>
          </Select>
        </FlexElement>
      </Wrapper>
    </OptionsWrapper>
  )
}
