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
  borderRadius: PropTypes.string
}
export default styled(Row)`
  margin: ${props => props.margin ? `${props.margin}` : `0`};
  padding: ${props => props.padding ? `${props.padding}` : `0`};
  ${props => props.background && `background: ${props.background};`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
  box-sizing: border-box;
  ${props => props.flex && `display: flex;`}
`