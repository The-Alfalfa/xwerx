import React, { Component } from 'react';
import styled from "styled-components";
import Cake from '@material-ui/icons/Cake';
import ImportanceChart from './ImportanceChart';

const BorderedCake = styled(Cake)`
  padding: 5px;
  box-sizing: border-box;
  background: #7bc6a7;
  border-radius: 4px;
  margin-right: 5px;
`

const Table = styled.table`
  width: calc(100% + 40px);
  border-collapse: collapse;
  margin-left: -20px;

  tr {
    border-top: 1px solid #ffffff;
  }
  td {
    padding: 0 20px;
    text-align: left;

    div,
    span {
      display: inline-block;
    }
    
    svg {
      vertical-align: middle;
      font-size: 30px;
    }

    &:last-child {
      text-transform: uppercase;
      text-align: right;
    }
  }
`

class AlertsTable extends Component {
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
        data: json,
      });
    })
    .catch(error => {
      console.log(error.message);
    });
    
   }

   render() {
    const alertsList = this.state.data;
    let alerts = '';

    alerts = alertsList.map( (obj, index) => {
      return (
        <tr key={index}>
          <td colSpan="2"><BorderedCake /><strong>{obj.name}</strong></td>
          <td colSpan="2"><p>{obj.subject}</p></td>
          <td><p>{obj.date}</p></td>
          <td><div><strong>{obj.importance}</strong><ImportanceChart importance={obj.importance} /></div></td>
        </tr>
      )
    })

    return (
      <Table>
        <tbody>
          {alerts}
        </tbody>
      </Table>
    )
  }
}

export default AlertsTable