import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div(({
  color
}) => `
    width: 100%;
    background: ${!color ? 'fff' : color}
    box-sizing: border-box;
    margin: 0;
    color: rgba(0,0,0,.85);
    line-height: 1.5715;
    list-style: none;
    position: relative;
    padding: 16px 24px;
    background-color: #fff;
`);
const StyledHeaderWrapper = styled.div(({
  fontSize
}) => `
  font-size: ${fontSize}px;
`);

const Header = ({
  fontSize,
  children,
  ...rest
}) => {
  return React.createElement(StyledHeaderWrapper, {
    fontSize: fontSize
  }, React.createElement(StyledHeader, Object.assign({}, rest), children));
};

const StyledFlexElement = styled.div(({
  column
}) => `
 flex: ${column / 24};
`);
const StyledWrapper = styled.div(({
  color
}) => `
  color: ${color || 'black'};
`);

const FlexElement = ({
  color,
  children,
  ...rest
}) => {
  return React.createElement(StyledWrapper, {
    color: color
  }, React.createElement(StyledFlexElement, Object.assign({}, rest), children));
};

const StyledWrapper$1 = styled.div(({
  flexDirection: _flexDirection = 'row',
  wrap: _wrap = false,
  justify: _justify = 'center',
  align: _align = 'start'
}) => `
  display: flex;
  flex-direction: ${_flexDirection};
  flex-wrap: ${_wrap ? 'wrap' : 'nowrap'};
  justify-content: ${_justify};
  align-items: ${_align}
`);

const Wrapper = ({
  children,
  ...rest
}) => {
  return React.createElement(StyledWrapper$1, Object.assign({}, rest), children);
};

export { FlexElement, Header, Wrapper };
//# sourceMappingURL=index.modern.js.map
