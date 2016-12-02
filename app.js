
$(() => window.rps = new RockPaperScissors());

class RockPaperScissors {
    constructor(){
        this.moves = ["rock", "paper", "scissors"];
        this.matrix = [
          [0,-1,1],
          [1,0,-1],
          [-1,1,0]  
        ];
        this.clickOptions = $("#images");
        this.message = $("#message");
        this.score = {
            "1": $("#playerscore"),
            "-1": $("#computerscore")
        }
        this.players = {
            "1": "player",
            "-1": "computer"
        }
        this.tally = {
            "1": 1,
            "-1": 1
        }
        this.addEventListeners();     
    }  
        addEventListeners() {
            this.clickOptions.each((i, imagesToClick) => $(imagesToClick).click(this.play.bind(this)));
        }
        play() {
            this.matrixElement = this.matrix[this.moves.indexOf(event.target.id)][Math.floor(Math.random()*3)].toString();
            if(this.matrixElement !="0") {
                 this.score[this.matrixElement].html((this.tally[this.matrixElement]) ++ );
                 this.message.text(`${this.players[this.matrixElement]} wins!`);
            }else {
                this.message.text("tie!");
            }    
        }
    }
