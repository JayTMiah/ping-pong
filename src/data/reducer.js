import initial from './initial'

const playerOneScore = (state) => {
    return { ...state, player1: state.player1 + 1 }
  }
  
  const playerTwoScore = (state) => {
    return { ...state, player2: state.player2 + 1 }
  }
  
  const servingPlayer = (state) => {
    if((state.player1 + state.player2) % 5 === 0){
      if(state.server === 1){
        return {...state, server: 2}
      }
  
  
      if(state.server === 2){
        return {...state, server: 1}
      }
    }
    return state;
  }
  
  const youWin = (state) => {
    if(state.player1  === 21){
      return {...state, winner: 1}
    } else if(state.player2 === 21){
        return {...state, winner: 2}
      }
      return state;
  }
  
  const reducer = (state, action) => { // function that takes current state - which is what the store is keeping track of. And an action that updates the state according to the action. Returning a new state.
    
    switch (action.type) {
      
      case "P1SCORE": 
        return youWin(servingPlayer(playerOneScore(state))); // updates player1 score
  
      case "P2SCORE": 
        return youWin(servingPlayer(playerTwoScore(state)));
  
      case "RESET_SCORES": return initial; // resets score
  
      default: return state;
    }
  };

export default reducer;