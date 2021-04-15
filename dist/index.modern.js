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
    font-size: 14px;
    line-height: 1.5715;
    list-style: none;
    position: relative;
    padding: 16px 24px;
    background-color: #fff;
`);

const Header = ({
  color,
  children,
  ...rest
}) => {
  return React.createElement(StyledHeader, Object.assign({
    color: color
  }, rest), children);
};

const StyledFlexElement = styled.div(({
  column
}) => `
 flex: ${column / 24};
`);

const FlexElement = ({
  column,
  children,
  ...rest
}) => {
  return React.createElement(StyledFlexElement, Object.assign({
    column: column
  }, rest), children);
};

const StyledWrapper = styled.div(({
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
  align,
  flexDirection,
  justify,
  children,
  ...rest
}) => {
  return React.createElement(StyledWrapper, Object.assign({
    align: align,
    flexDirection: flexDirection,
    justify: justify
  }, rest), children);
};

export { FlexElement, Header, Wrapper };
//# sourceMappingURL=index.modern.js.map
