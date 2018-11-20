import React from "react";
import styled from "styled-components";
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const IncreaseText = styled.div`
  p {
    font-size: 45px;
    color: #67a3e7;
    margin: 0 auto;
    text-align: center;
    line-height: 34px;
  }
`

// Component that shows the increase chart with the information given by the parent ClientSummary
const IncreaseChart = (props) => (
  <div className={props.className}>
    <ArrowUpward />
    <IncreaseText>
        <p>{props.increaseValue.toString()}</p>
    </IncreaseText>
    <p>INCREASE</p>
  </div>
)

export default styled(IncreaseChart)`
  width: 20%;
  position: relative;
  text-align: center;

  p {
      margin: 20px auto 0;
  }

  svg {
      color: #67a3e7;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 200px;
  }
`