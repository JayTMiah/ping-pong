// Update your app so that it shows the current scores for Player 1 and Player 2 (they'll both be 0 to start with). Make changes to the initial state and check that it renders correctly.

import { Component } from "react";

class CurrentScore extends Component {
  constructor(props) {
    super(props);

    // keep track of whether the button is selected
    this.state = { 
        player1: 0,
        player2: 0
    };
  }

  render() {
    
    return (
        <>
            <p></p>
        </>
      
    );
  }
}

export default CurrentScore;