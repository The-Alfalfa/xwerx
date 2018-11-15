import React, { Component } from 'react';

import Container from '../Common/Container';
import Row from '../Common/Row';
import ClientsToolbar from '../Toolbars/ClientsToolbar';
import AlertsToolbar from '../Tables/AlertsToolbar';
import AlertsTable from '../Tables/AlertsTable';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row padding="20px 40px" margin="0 0 40px" background="#4b545d" borderRadius="6px">
            <ClientsToolbar />
          </Row>
          <Row padding="20px" background="#5bb892" borderRadius="6px">
            <AlertsToolbar />
            <AlertsTable />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App
