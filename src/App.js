import React, { Component } from "react";
import "./App.css";
import { names } from "./names.json";
import Winner from "./components/Winner";
import Sound from "react-sound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: "Haga click en el boton para generar un nombre",
      playStatus: Sound.status.PAUSED
    };
  }

  playAudio() {
    this.setState({ playStatus: Sound.status.PLAYING });
  }

  generateWinner() {
    this.playAudio();
    setTimeout(() => {
      let winner = names[Math.floor(Math.random() * names.length)];
      this.setState({ winner });
      clearInterval(this.interval);
    }, 4400);
    this.interval = setInterval(
      () =>
        this.setState({
          winner: names[Math.floor(Math.random() * names.length)]
        }),
      100
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Generar Jugador</h1>
          <Winner winner={this.state.winner} />
          <Sound
            url="https://www.dinorajimenez.online/wp-content/uploads/2019/02/drumroll.wav"
            playStatus={this.state.playStatus}
          />
          <button onClick={() => this.generateWinner()}>Generar</button>

          <small className="github-link">
            Made with by&nbsp;
            <a
              href="https://carlosalfaro.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              carlosalfaro.me
            </a>
          </small>
        </div>
      </div>
    );
  }
}

export default App;
