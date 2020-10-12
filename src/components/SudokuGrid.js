import React, { Component } from 'react';


class SudokuGrid extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {number: 0,color: ''}
  }


  handleChange(e, row, col) {
    e.preventDefault();
    const vert = row;
    const horiz = col;
    let validChar = /^$|[1-9]/
    var duplicates;
    if (validChar.test(e.target.value)) {
      duplicates = this.props.updateGrid(vert, horiz, e.target.value);
    };
    for (let index = 0; index < duplicates.length; index++) {
      const element = duplicates[index];
      if (element == e.target.value) {
        this.setState({number:e.target.value ,color: 'Red'})
      }
    }

  }

  componentDidMount() {
    this.props.newGrid('grid_01');
  }

  clickHandler(e) {
    e.target.select();
  }

  col(row, grid) {
    return [...Array(9).keys()].map((col) => (
      <textarea 
      className="box" 
      maxLength="1" 
      onClick={this.clickHandler} key={`col-${col}`} 
      value={grid[row*9 + col]} onChange={(e) => this.handleChange(e, row, col)} 
      style={{color: grid[row*9 + col] == this.state.number ? this.state.color: ''} }>
      </textarea>
    ))
  }

  render() {
    const { grid } = this.props;
    return (
      <div className="sudokuBoxContainer">
        <div className="sudokuBox">
          {[...Array(9).keys()].map((row) => (
            <div className="row" key={`row-${row}`}>
              {this.col(row, grid)}
            </div>
          ))
          }
        </div>
      </div>
    )
  }
}

export default SudokuGrid;