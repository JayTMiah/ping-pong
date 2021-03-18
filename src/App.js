import Header from './components/Header.js'
import Winner from './components/Winner.js'
import Reset from './components/Reset.js'
import Player from './components/Player.js'

const App = ({ player1, player2, handlePlayer1, handlePlayer2, resetScores, server, winner }) => (
    <>
        {/* header */}
        <Header/>

        {/* scores */}
        <div className="row mb-4">
            <Player 
                playerNumber={ 1 }
                handlePlayer={ handlePlayer1 }
                scores={ player1 }
                servingPlayer={ server }
            />

            <Player 
                playerNumber={ 2 }
                handlePlayer={ handlePlayer2 }
                scores={ player2 }
                servingPlayer={ server }
            />
        </div>

        { /* winner message */}
        <Winner winner={ winner }/>

        { /* reset button */}
        <Reset reset={ resetScores }/>
    </>
);

export default App;