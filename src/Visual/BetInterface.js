import React from 'react';
import ReactDOM from 'react-dom';

/*var json = $.getJSON("/data/data.text", function(json) {
    console.log(json); // this will show the info it in firebug console
});*/
//var json = require('data.text'); //to update with data folder

/*
class Game extends React.Component {
    constructor(props) {
      super(props);
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
*/

function BetInterface3x2() {
    return (
        
        <div class="col mr-2">
            <div class="text-s font-weight-bold text-primary mb-1">
                Red Sox vs Yankees 7/27 @7:05
                </div>
            <div class="mb-0 text-s text-gray-800">
                <table class="table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>Spread</th>
                            <th>Moneyline</th>
                            <th>Over/Under</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Red Sox</td>
                            <td>-2.5: -110</td>
                            <td>+280</td>
                            <td>+220: -110</td>
                        </tr>
                        <tr>
                        <td>Yankees</td>
                        <td>+2.5: +110</td>
                        <td>-280</td>
                        <td>-220: +110</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BetInterface3x2;