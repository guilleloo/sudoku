import React, { Component } from 'react';
import './App.css';
import MainWindow from './components/MainWindow';
import { grid_templates } from './common/grid_templates';

class App extends Component {

  constructor() {
    super();
    this.newGrid = this.newGrid.bind(this);
    this.updateGrid = this.updateGrid.bind(this);

    this.state = {
      grid: grid_templates.grid_empty,
    };
  }

  newGrid(grid_id = 'grid_empty') { 
    const grid = [...grid_templates[grid_id]];
    this.setState({ grid });
  }

  updateGrid(vert, horiz, value) {
    const grid = [...this.state.grid];
    if (value === "") grid[vert*9 + horiz] = value;
    else grid[vert*9 + horiz] = 1 * value;

    
    var duplicates = [];
    for (let index = 0; index < 81; index++) {
      var aux = grid[index];
      if (aux == value) {
        duplicates.push(aux);
      }
    }
    this.setState({ grid });
    return duplicates
  }


  render() {
    return (
      <div className="App">
        <div className="body">
          <MainWindow
            grid={this.state.grid}
            duplicates ={this.state.duplicates}
            updateGrid={this.updateGrid}
            newGrid={this.newGrid}
          />
        </div>
      </div>
    );
  }
}

export default App;
