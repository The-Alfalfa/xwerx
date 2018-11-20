import React, { Component } from 'react';
import styled from "styled-components";
import Row from '../Common/Row';
import CircleChart from './CircleChart';
import BarChart from './BarChart';
import IncreaseChart from './IncreaseChart';

// Component that shows the different charts
class ClientsSummary extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  // Get the activity data by month
  componentDidMount() {
    fetch("./data/activity.json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        data: json
      });
    })
    .catch(error => {
      console.log(error.message);
    });
   }

   render() {
    const increase = this.state.data.Dec - this.state.data.Jan;
    return (
      <Row className={this.props.className} flex spaceBetween alignBottom>
        <CircleChart value={this.state.data.Dec} />
        <BarChart chartData={this.state.data} />
        <IncreaseChart increaseValue={increase} />
      </Row>
    )
  }
}

export default styled(ClientsSummary)`
  @media screen and (max-width: 900px){
    align-items: center;
    flex-direction: column;

    > div {
      margin-bottom: 40px;
    }
  }
`