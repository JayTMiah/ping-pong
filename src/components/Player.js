

const Player = ({playerNumber, handlePlayer, servingPlayer, scores}) =>(
    <div className="col-md-6 mt-4">
        <div className={"card text-center " + (servingPlayer === playerNumber ? "bg-dark text-white" : '' ) }>
            <h5 className="card-header">Player { playerNumber }</h5>
            <div className="card-body">
                <p className="card-text display-1">{ scores }</p>
            </div>
            <div className="card-footer">
                <button className="form-control btn btn-success" onClick={ handlePlayer }>+</button>
            </div>
        </div>
    </div>
);

export default Player;