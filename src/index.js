import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import initial from './data/initial';
import reducer from'./data/reducer';




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
        winner={ state.winner }
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
