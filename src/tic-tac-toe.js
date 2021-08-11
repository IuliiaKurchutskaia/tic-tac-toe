class TicTacToe {
    constructor() {
        let size=3;
        this.state= new Array(size).fill(null).map(el=> new Array(size).fill(null));
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
       
          //    for (let i=0; i<state.length; i++) {
     
                //  if(this.getFieldValue(i,i)!==null && this.getFieldValue(i+1,i+1)===this.getFieldValue(i,i)){ 
                   //   return this.getFieldValue(0,0);
              //    }

             // }

        //   for ( let i=state.length-1; i >= 0; i--) {
         //     if(this.getFieldValue(i,length-1)!==null){
         //     let arr=push(getFieldValue(i,length-1));
         //     return arr;
        //      }
     // }
         //     if(arr.size===3){
          //       function iszero(sign) {
          //        return sign === "o";
            //   }
           //      if( arr.every(iszero)===true)
      //        r
            
           //      } 
           //   }


        



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