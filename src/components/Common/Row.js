import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Row = (props) => (
  <div className={props.className}>
    {props.children}
  </div>
)

Row.propTypes = {
  children: PropTypes.any,
  padding: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string,
  borderRadius: PropTypes.string,
  flex: PropTypes.bool,
  alignCenter: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  wrap: PropTypes.bool
}
export default styled(Row)`
  width: 100%;
  margin: ${props => props.margin ? `${props.margin}` : `0`};
  padding: ${props => props.padding ? `${props.padding}` : `0`};
  ${props => props.background && `background: ${props.background};`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
  box-sizing: border-box;
  ${props => props.flex && `display: flex;`}
  ${props => props.alignCenter && `align-items: center;`}
  ${props => props.spaceBetween && `justify-content: space-between;`}
  ${props => props.wrap && `flex-wrap: wrap;`}
  ${props => props.alignBottom && `align-items: flex-end;`}
`