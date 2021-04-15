function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var StyledHeader = styled.div(function (_ref) {
  var color = _ref.color;
  return "\n    width: 100%;\n    background: " + (!color ? 'fff' : color) + "\n    box-sizing: border-box;\n    margin: 0;\n    color: rgba(0,0,0,.85);\n    font-size: 14px;\n    line-height: 1.5715;\n    list-style: none;\n    position: relative;\n    padding: 16px 24px;\n    background-color: #fff;\n";
});

var Header = function Header(_ref) {
  var color = _ref.color,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["color", "children"]);

  return React.createElement(StyledHeader, Object.assign({
    color: color
  }, rest), children);
};

var StyledFlexElement = styled.div(function (_ref) {
  var column = _ref.column;
  return "\n flex: " + column / 24 + ";\n";
});

var FlexElement = function FlexElement(_ref) {
  var column = _ref.column,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["column", "children"]);

  return React.createElement(StyledFlexElement, Object.assign({
    column: column
  }, rest), children);
};

var StyledWrapper = styled.div(function (_ref) {
  var _ref$flexDirection = _ref.flexDirection,
      flexDirection = _ref$flexDirection === void 0 ? 'row' : _ref$flexDirection,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? false : _ref$wrap,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? 'center' : _ref$justify,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'start' : _ref$align;
  return "\n  display: flex;\n  flex-direction: " + flexDirection + ";\n  flex-wrap: " + (wrap ? 'wrap' : 'nowrap') + ";\n  justify-content: " + justify + ";\n  align-items: " + align + "\n";
});

var Wrapper = function Wrapper(_ref) {
  var align = _ref.align,
      flexDirection = _ref.flexDirection,
      justify = _ref.justify,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["align", "flexDirection", "justify", "children"]);

  return React.createElement(StyledWrapper, Object.assign({
    align: align,
    flexDirection: flexDirection,
    justify: justify
  }, rest), children);
};

exports.FlexElement = FlexElement;
exports.Header = Header;
exports.Wrapper = Wrapper;
//# sourceMappingURL=index.js.map
