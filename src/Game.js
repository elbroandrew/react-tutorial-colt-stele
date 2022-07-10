import React, { Component } from 'react';

class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      score: 25,
      gameOver: false
    }
  }

  render(){
    return(
      <div>
        <h1>Your score: {this.state.score}</h1>
      </div>
    )
  }
}