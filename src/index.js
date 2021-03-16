import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

const initial = { // value state has when app first loads. properties (keys) will stay the same, but the values will change over time.
  player1: 0, 
  player2: 0,
  server: 1
  };

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

const reducer = (state, action) => { // function that takes current state - which is what the store is keeping track of. And an action that updates the state according to the action. Returning a new state.
  
  switch (action.type) {
    
    case "P1SCORE": 
      return servingPlayer(playerOneScore(state)); // updates player1 score

    case "P2SCORE": 
      return servingPlayer(playerTwoScore(state));
      
    case "RESET_SCORES": return initial; // resets score

    default: return state;
  }
};

const store = createStore(reducer, initial, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // this wraps the state. its purpose is to keep track of the current state, after it is passed the initial state.

const render = () => {
  let state = store.getState(); 
  console.log(state.count);

  ReactDOM.render(
    <React.StrictMode>
      <App 
        player1={ state.player1 } 
        player2={ state.player2 }
        server={ state.server }
        handlePlayer1={ () => {
          store.dispatch({ type: "P1SCORE" });
        }}
        handlePlayer2={ () => {
          store.dispatch({ type: "P2SCORE" });
        }}
        resetScores={() => {
          store.dispatch({ type: "RESET_SCORES" });
        }}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
};

store.subscribe(render);

render();



