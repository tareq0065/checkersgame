import React, {Component} from 'react';
import './App.css';
import './board'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className='app'>
                <div className="column justifyCenter">
                    <div className="stats">
                        <div className="wrapper">
                            <div id="player1">
                                <h3>Player 1</h3>
                            </div>
                            <div id="player2">
                                <h3>Player 2</h3>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="turn"></div>
                        <span id="winner"></span>
                        <button id="cleargame">Reset Game</button>
                    </div>
                </div>
                <div className="column justifyCenter">
                    <div id="board">
                        <div className="tiles"></div>
                        <div className="pieces">
                            <div className="player2pieces">
                            </div>
                            <div className="player1pieces">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
