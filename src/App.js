import React, { Component } from 'react';
import GraphBar from './GraphBar';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vanillaVotes: 0,
      chocolateVotes: 0,
      strawberryVotes: 0
    };
  }


  render() {
    return (
      <div className="App">
        <GraphBar flavor={"Vanilla"} value={this.state.vanillaVotes} />
        <button onClick={this.handleVanillaClick.bind(this)}>Vote For Vanilla</button>

        <GraphBar flavor={"Chocolate"} value={this.state.chocolateVotes} />
        <button onClick={this.handleChocolateClick.bind(this)}>Vote For Chocolate</button>

        <GraphBar flavor={"Strawberry"} value={this.state.strawberryVotes} />
        <button onClick={this.handleStrawberryClick.bind(this)}>Vote For Strawberry</button>

      </div>
    );
  }

  handleVanillaClick() {
    this.setState(prevState => ({ vanillaVotes: prevState.vanillaVotes + 1 }) );
  }

  handleChocolateClick() {
    this.setState(prevState => ({ chocolateVotes: prevState.chocolateVotes + 1 }) );
  }

  handleStrawberryClick() {
    this.setState(prevState => ({ strawberryVotes: prevState.strawberryVotes + 1 }) );
  }

}

export default App;
