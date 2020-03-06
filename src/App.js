import React, { Component } from "react";
import Game from "./Game";
import "./css/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Game sideCellCount={5} />
        <footer className="App-footer">
          <p>
            Made with <span role="img">❤️</span> by{" "}
            <span className="App-special-link">Madushan</span>
          </p>
          <p>
            Find me on{"  "}
            <a
              href="https://www.facebook.com/madushan.sooriyarathne"
              className="App-social-link"
            >
              Facebook
            </a>
            {"  "}
            <a
              href="https://www.instagram.com/iam_madushan/"
              className="App-social-link"
            >
              Instagram
            </a>
            {"  "}
            <a
              href="https://github.com/madushan-sooriyarathne"
              className="App-social-link"
            >
              Github
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
