import React from "react";
import styled from "styled-components";
import { Settings, ArrowRight } from '@material-ui/icons';

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
      color: #67a3e7;
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
    color: #67a3e7;
  }

  svg {
    color: #747f86;
  }
`

const ClientsToolbar = () => (
  <Toolbar>
    <div className="left">
      <p><strong>CLIENTS</strong><ArrowRight /></p>
    </div>
    <div className="right">
      <Settings />
    </div>
  </Toolbar>
)

export default ClientsToolbar