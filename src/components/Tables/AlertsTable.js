import React from "react";
import styled from "styled-components";
import Cake from '@material-ui/icons';

import Row from '../Common/Row';

const BorderedCake = styled(Cake)`
  padding: 5px;
  box-sizing: border-box;
  background: #7bc6a7;
  border-radius: 4px;
  margin-right: 5px;
`

const AlertsTable = () => (
  <Row flex>
    <p><BorderedCake /><strong>Adam Compton</strong></p>
    <p>Adam's End of Year review coming up</p>
    <p>Feb 03</p>
    <p><strong>VERY</strong></p>
  </Row>
)

export default AlertsTable