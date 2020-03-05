import React, { Component } from "react";
import Cell from "./Cell";
import "./css/Game.css";

export default class Game extends Component {
  static defaultProps = {
    sideCellCount: 5
  };

  constructor(props) {
    super(props);
    this.state = {
      gridMap: Array.from({ length: this.props.sideCellCount }).map(row =>
        Array.from({ length: this.props.sideCellCount }).map(
          cell => Math.random() > 0.25
        )
      ),
      status: false,
      clicks: 0
    };
    this.click = this.click.bind(this);
    this.flipCell = this.flipCell.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  flipCell(state, pos) {
    if (
      pos.row >= 0 &&
      pos.row < this.props.sideCellCount &&
      pos.cell >= 0 &&
      pos.cell < this.props.sideCellCount
    ) {
      state.gridMap[pos.row][pos.cell] = !state.gridMap[pos.row][pos.cell];
    }

    return state;
  }

  updateStatus(state) {
    console.log(state);
    let status = true;
    state.gridMap.forEach(row =>
      row.forEach(cell => {
        if (cell === false) {
          status = false;
        }
      })
    );
    return status;
  }

  handleClick(event) {
    this.setState({
      gridMap: Array.from({ length: this.props.sideCellCount }).map(row =>
        Array.from({ length: this.props.sideCellCount }).map(cell =>
          Math.random() < 0.5 ? true : false
        )
      ),
      status: false,
      clicks: 0
    });
  }

  click(pos) {
    if (this.state.status) {
      return;
    }
    this.setState(st => {
      // Update no of clicks
      st.clicks++;

      // Updating cells
      //Flip current cell
      st = this.flipCell(st, pos);

      // Flip upper cell
      st = this.flipCell(st, { row: pos.row - 1, cell: pos.cell });

      // Flip below cell
      st = this.flipCell(st, { row: pos.row + 1, cell: pos.cell });

      // Flip left cell
      st = this.flipCell(st, { row: pos.row, cell: pos.cell - 1 });

      // flip right cell
      st = this.flipCell(st, { row: pos.row, cell: pos.cell + 1 });

      // Updated the current game status => Win or still playing
      st.status = this.updateStatus(st);

      return st;
    });
  }

  render() {
    return (
      <div className="Game">
        <div className="Game-title">
          {"LIGHTS OUT".split("").map(letter => (
            <span className="Game-title-letter">{letter}</span>
          ))}
        </div>
        <p className="Game-instructions">
          Turn all the squares to <span>black</span> color
        </p>
        <table className="Game-grid">
          {this.state.gridMap.map((row, rowIndex) => (
            <tbody
              className="Game-row"
              style={{
                gridTemplateColumns: `repeat(${this.props.sideCellCount}, min-content)`
              }}
            >
              {row.map((cell, cellIndex) => (
                <Cell
                  status={cell}
                  pos={{ row: rowIndex, cell: cellIndex }}
                  click={this.click}
                />
              ))}
            </tbody>
          ))}
        </table>
        {this.state.status ? (
          <h1 className="Game-status-win">You Win! congratulations!</h1>
        ) : (
          <h1 className="Game-clicks">clicks : {this.state.clicks}</h1>
        )}
        <button className="Game-reset" onClick={this.handleClick}>
          Reset
        </button>
      </div>
    );
  }
}
