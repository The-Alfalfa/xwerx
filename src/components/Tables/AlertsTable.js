import React, { Component } from 'react';
import styled from "styled-components";
import Cake from '@material-ui/icons/Cake';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
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
    border-top: 1px solid #f3f3f3;

    &.sort {
      border-top: 0;
      
      p {
        display: inline-block;
        cursor: pointer;
        position: relative;
        margin: 0 0 5px;
        font-size: 0.9rem;
        font-weight: bold;
      }

      svg {
        transform: rotate3d(0,0,1,0deg);
        transition: transform 0.2s ease;
        font-size: 23px;
      }

      &.asc svg {
        transform: rotate3d(0,0,1,180deg);
      }
    }
  }

  td {
    padding: 5px 20px;
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

    &.left {
      padding: 20px;
    }
  }

  @media screen and (max-width: 900px) {
    td {
      padding: 5px;
      font-size: 0.93rem;
      display: block;
    }
  }
`

const TableFooter = styled.div`
  border-top: 1px solid #f3f3f3;
  position: relative;
  padding: 20px;
  margin-left: -20px;
  width: 100%;

  #viewMore {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-50%,0,0);
    margin: 0 auto;
    text-align: center;
    background: #7bc6a7;
    padding: 5px 0 5px 10px;
    font-size: 11px;
    display: flex;
    align-items: center;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    cursor: pointer;
  }

  p {
    cursor: pointer;
    display: inline-block;
    font-size: 0.9rem;
    margin: 0;
    
    &#viewAll {
      font-weight: bold;
    }
  }
`

class AlertsTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      order: null,
      itemsShown: 5
    };
    this.handleSort = this.handleSort.bind(this);
    this.handleMoreResults = this.handleMoreResults.bind(this);
    this.handleViewAll = this.handleViewAll.bind(this);
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

   handleSort() {
    let order = this.state.order === 'desc' ? 'asc' : this.state.order === 'asc' ? 'desc' : 'asc';
    let sortedData = this.state.data.sort((a,b) => a['importance'].localeCompare(b['importance']));

    if(order === 'desc') {
      sortedData.reverse();
    }

    this.setState({
      data: sortedData,
      order: order
    })
   }

   handleMoreResults() {
     let results = this.state.itemsShown + 5;
     this.setState({
      itemsShown: results
     });

     let count = (this.state.data).length;
     console.log(this.state.itemsShown);
     console.log(count);
     if(this.state.itemsShown >= count) {
      document.getElementsByClassName("tableFooter")[0].style.display = 'none';
     }
   }
   handleViewAll() {
    this.setState({
     itemsShown: null
    });
      document.getElementsByClassName("tableFooter")[0].style.display = 'none';
  }

   render() {
    let alertsList = this.state.data;
    let alerts = '';

    if(this.state.itemsShown != null) {
      alertsList = alertsList.slice(0, this.state.itemsShown);
    }

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
      <div>
        <Table>
          <tbody>
            <tr className={'sort ' + this.state.order}>
              <td colSpan="6"><p onClick={this.handleSort}>IMPORTANCE<ArrowDropDown /></p></td>
            </tr>
            {alerts}
          </tbody>
        </Table>
        <TableFooter className="tableFooter">
          <p id="viewMore" onClick={this.handleMoreResults}>SEE MORE<ArrowDropDown /></p>
          <p id="viewAll" onClick={this.handleViewAll}>VIEW ALL</p>
        </TableFooter>
      </div>
    )
  }
}

export default AlertsTable