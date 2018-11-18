import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ImportanceChart = (props) => (
  <div className={props.className}>
    <span></span>
    <span></span>
    <span></span>
  </div>
)

ImportanceChart.propTypes = {
  importance: PropTypes.string.isRequired
}
export default styled(ImportanceChart)`
  width: 20px;
  height: 20px;
  margin-left: 4px;

  span {
      background: #ffffff;
      width: 5px;
      height: 20%;
      margin-left: 1px;

      &:nth-child(2){
        height: 50%;
        opacity: ${props => {
          if(props.importance === "very" || props.importance === "middle") {
            return "1"
          }else{
            return "0.3"
          }
        }}
      }

      &:nth-child(3){
        height: 100%;
        opacity: ${props => props.importance === "very" ? "1" : "0.3" };
      }
  }
`