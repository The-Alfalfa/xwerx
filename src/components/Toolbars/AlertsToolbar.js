import React, { Component } from 'react';
import styled from "styled-components";
import { Settings, PieChart, Refresh, ArrowDropDown } from '@material-ui/icons';

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  p {
    strong {
      font-weight: bold;
    }
    svg {
      font-size: 23px;
      color: #ffffff;
    }
  }

  div,
  p {
    display: flex;
    align-items: center;
  }

  p,
  svg {
    font-size: 0.9rem;
    cursor: pointer;
    color: #ffffff;
    margin-right: 20px;
  }

  svg {
    color: #ffffff;

    &.rotate {
      transform: rotate3d(0,1,0,180deg);
    }
  }
`

const Button = styled.p`
  border: 1px solid #ffffff;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 5px 5px 5px 10px;

  svg {
    margin-right: 0;
    font-size: 20px;
  }
`

 class AlertsToolbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("./data/alerts.json")
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
    var count = this.state.data;

    return (
      <Toolbar>
        <div className="left">
          <p><strong>ALERTS</strong></p>
          <p>Latest alerts ({count.length})</p>
          
        </div>
        <div className="right">
          <PieChart />
          <Refresh className="rotate" />
          <Settings />
          <Button><strong>SAVE</strong> <ArrowDropDown /></Button>
        </div>
      </Toolbar>
    )
  }
}

export default AlertsToolbar