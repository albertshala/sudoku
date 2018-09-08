import React, { Component } from 'react';
import Box from 'mineral-ui/Box';
import Table from './components/Table';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9],
];


// puzzle = [
//   [4,0,0,0,0,0,8,0,5],
//   [0,3,0,0,0,0,0,0,0],
//   [0,0,0,7,0,0,0,0,0],
//   [0,2,0,0,0,0,0,6,0],
//   [0,0,0,0,8,0,4,0,0],
//   [0,0,0,0,1,0,0,0,0],
//   [0,0,0,6,0,3,0,7,0],
//   [5,0,0,2,0,0,0,0,0],
//   [1,0,4,0,0,0,0,0,0]
// ];
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sudoku</h1>
        </header>
        <Box inline>
          <Table puzzle={this.puzzle}></Table>
        </Box>
      </div>
    );
  }
}

export default App;
