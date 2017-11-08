import React, { Component } from 'react';
import GraphBar from './GraphBar';

class Graph extends Component {

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
			<div className="Graph">
				<div className="bars">
					<GraphBar flavor={"Vanilla"} value={this.state.vanillaVotes} />

					<GraphBar flavor={"Chocolate"} value={this.state.chocolateVotes} />

					<GraphBar flavor={"Strawberry"} value={this.state.strawberryVotes} />

				</div>
				<div className="Vote">

					<button onClick={this.handleVanillaClick.bind(this)}>Vote For Vanilla</button>
					<button onClick={this.handleChocolateClick.bind(this)}>Vote For Chocolate</button>
					<button onClick={this.handleStrawberryClick.bind(this)}>Vote For Strawberry</button>

				</div>
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

export default Graph;