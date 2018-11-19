import React, { Component } from 'react';
import styled from "styled-components";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

class ClientsSummary extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
    // this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    fetch("./data/clients.json")
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
    return (
      <div></div>
    )
  }
}

export default ClientsSummary