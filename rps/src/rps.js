const Shape = require('./shape')

class RPS {

    constructor(userInterface) {
        this._validShapes = [Shape.Rock, Shape.Paper, Shape.Scissors]
        this._userInterface = userInterface
    }

    playGame(player1Throw, player2Throw) {
        if (!this._validShapes.includes(player1Throw) || !this._validShapes.includes(player2Throw)) {
            this._userInterface.invalid();
        } else if (player1Throw === player2Throw) {
            this._userInterface.tie();
        } else if (player1Throw === Shape.Rock && player2Throw === Shape.Paper ||
            (player1Throw === Shape.Scissors && player2Throw === Shape.Rock) ||
            (player1Throw === Shape.Paper && player2Throw === Shape.Scissors)) {
            this._userInterface.p2Wins();
        } else {
            this._userInterface.p1Wins();
        }
    }
}

module.exports = RPS
