import React, { Component } from 'react';
import styled from "styled-components";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Row from '../Common/Row';
import CircleChart from './CircleChart';
import BarChart from './BarChart';
/*import IncreaseChart from './IncreaseChart'; */

class ClientsSummary extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

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
      <Row flex spaceBetween>
        <CircleChart value={this.state.data.Dec} />
        <BarChart chartData={this.state.data} />
      </Row>
    )
  }
}

export default ClientsSummary