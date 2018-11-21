import React from "react";
import styled from "styled-components";

const CircleText = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%,0,0);
  z-index: 2;

  p {
    margin: 20px auto 0;
  }

  p.value {
    font-size: 45px;
    color: #67a3e7;
    margin: 0 auto;
    text-align: center;
    line-height: 34px;
  }
`
// Component that shows the circle chart with the information given by the parent ClientSummary
const CircleChart = (props) => (
  <div className={props.className}>
    <div className="circle-container">
      <div className="arc">
      </div>
    </div>
    <CircleText>
        <p className="value">{props.value}</p>
        <p>ACTIVE CLIENTS</p>
    </CircleText>
  </div>
)

export default styled(CircleChart)`
  position: relative;
  padding-bottom: 42px;

  .circle-container {
    position: relative;
    width: 300px;
    height: 150px;
    overflow: hidden;

    &:before{
      content: '';
      width: 300px;
      height: 150px;
      position: absolute;
      -ms-transform-origin: 50% 0%;
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      left: 0;
      box-sizing: border-box;
      border: 50px solid #596169;
      border-bottom: none;
      top: 0;
      z-index: 1;
      border-radius: 300px 300px 0 0;
    }
  }
  
  .arc {
    content: '';
    width: 300px;
    height: 150px;
    position: absolute;
    -ms-transform-origin: 50% 0%;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    left: 0;
    box-sizing: border-box;
  }
  
  
  
  .arc {
    border: 50px solid #67a3e7;
    border-top: none;
    border-radius: 0 0 300px 300px;
    top: 100%;
    z-index: 2;
    -webkit-animation: circle 1s ease-out forwards;
    animation: circle 1s ease-out forwards;
    animation-delay: 1s;
    -webkit-animation-delay: 1s;
    
    @keyframes circle {
      from { transform: rotate3d(0,0,1,0deg); }
      to { transform: rotate3d(0,0,1,${props => props.value * 0.68}deg); }
    }
    @-webkit-keyframes circle {
      from { transform: rotate3d(0,0,1,0deg); }
      to { transform: rotate3d(0,0,1,${props => props.value * 0.68}deg); }
    }
  }
`