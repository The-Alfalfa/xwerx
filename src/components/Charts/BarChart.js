import React, {Component} from "react";
import styled , { keyframes } from "styled-components";
import PropTypes from "prop-types";

const Bar = styled.div`
  height: 100%;
  width: 8px;
  background: #596169;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    left: 0;
    bottom: 0;
    background: #67a3e7;

    animation: ${props => moveChart((props.value * 100) / 280)} 1s ease-out forwards;
    animation-delay: 1s;
  }
`

const moveChart = (y) => keyframes`
  0% {
    height: 0; 
  }
  100% {
    height: ${y}px;
  } 
`;

const BarChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  text-align: center;

  > p {
    width: 100%:
  }
`

class BarChart extends Component {
  render() {
    let data = this.props.chartData;
    
    return(
      <div className={this.props.className}>
        <BarChartContainer>
          <Bar value={data.Jan} />
          <Bar value={data.Feb} />
          <Bar value={data.Mar} />
          <Bar value={data.Apr} />
          <Bar value={data.May} />
          <Bar value={data.Jun} />
          <Bar value={data.Jul} />
          <Bar value={data.Aug} />
          <Bar value={data.Sep} />
          <Bar value={data.Oct} />
          <Bar value={data.Nov} />
          <Bar value={data.Dec} />
        </BarChartContainer>
        <p>LAST 12 MONTHS</p>
      </div>
    )
  }
}

BarChart.propTypes = {
  chartData: PropTypes.any.isRequired
}
export default styled(BarChart)`
  box-sizing: border-box;
  width: 20%;

  p {
    margin: 20px auto 0;
    text-align: center;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 200px;
  }
`