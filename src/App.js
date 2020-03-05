import React, {Component} from 'react';
import Game from './Game';
import './css/App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Game sideCellCount={5}/>
      </div>
    )
  }
}
