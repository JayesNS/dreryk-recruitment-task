import React from 'react';

import './App.css';
import { TableContainer } from './containers/TableContainers';
import mockData from './mocks/mockData.json';
import mockColumnConfig from './mocks/mockColumnConfig.json';

function App() {
  return (
    <TableContainer data={mockData} config={mockColumnConfig}></TableContainer>
  );
}

export default App;
