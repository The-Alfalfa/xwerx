import React, { Component } from 'react';
import styled from "styled-components";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import CircleChart from './CircleChart';
/* import BarChart from './BarChart';
import IncreaseChart from './IncreaseChart'; */

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
      <div>
        <CircleChart value={this.state.data.Dec} />
      </div>
    )
  }
}

export default styled(ClientsSummary)`
  display: flex;

  > div {
    width: 33%;
    padding: 0 20px;
    box-sizing: border-box;
  }
` 