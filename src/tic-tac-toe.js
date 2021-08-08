class TicTacToe {
    constructor() {

        this.state = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.state[rowIndex][columnIndex]) {
            if (this.getCurrentPlayerSymbol() === "x") {
                this.state[rowIndex][columnIndex] = "x";
                this.currentPlayerSymbol = 'o';

            } else {
                this.state[rowIndex][columnIndex] = "o";
                this.currentPlayerSymbol = 'x';
            }
        }
    }


    isFinished() {
        return (this.getWinner() || this.isDraw()) ? true : false;
    }




    getWinner() {
        if ((this.state[0][0] !== null) && this.state[0][0] == this.state[0][1] && this.state[0][0] == this.state[0][2]) return this.getFieldValue(0,0);
        if ((this.state[1][0] !== null) && this.state[1][0] == this.state[1][1] && this.state[1][0] == this.state[1][2]) return this.getFieldValue(1,0);
        if ((this.state[2][0] !== null) && this.state[2][0] == this.state[2][1] && this.state[2][0] == this.state[2][2]) return this.getFieldValue(2,0);

        if ((this.state[0][0] !== null) && this.state[0][0] == this.state[1][0] && this.state[0][0] == this.state[2][0]) return this.getFieldValue(0,0);
        if ((this.state[0][1] !== null) && this.state[0][1] == this.state[1][1] && this.state[0][1] == this.state[2][1]) return this.getFieldValue(0,1);
        if ((this.state[0][2] !== null) && this.state[0][2] == this.state[1][2] && this.state[0][2] == this.state[2][2]) return this.getFieldValue(0,2);

        if ((this.state[0][0] !== null) && this.state[0][0] == this.state[1][1] && this.state[0][0] == this.state[2][2]) return this.getFieldValue(0,0);
        if ((this.state[0][2] !== null) && this.state[0][2] == this.state[1][1] && this.state[0][2] == this.state[2][0]) return this.getFieldValue(0,2);

        return null;
    }


    noMoreTurns() {
        return this.state.every(item => !(item.includes(null)));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.state[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;