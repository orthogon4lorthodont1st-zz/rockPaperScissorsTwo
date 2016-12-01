
$(() => window.rps = new RockPaperScissors());

class RockPaperScissors {
    constructor(){
        this.moves = ["rock", "paper", "scissors"];
        this.matrix = [
          [0,-1,1],
          [1,0,-1],
          [-1,1,0]  
        ];
        this.clickOptions = $(".images");
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
        this.addEventListeners();                // INITIALIZE ALL PARAMETERS OF THE GAME WE NEED TO MANIPULATE
    }  
        addEventListeners() {
            this.clickOptions.each((i, imagesToClick) => $(imagesToClick).click(this.play.bind(this)));
        }
        // the first element is 0, 1, 2 depending which option is clicked
        // second element is the computer move randomly generated
        matrixElements() {
            // return matrix element by returning the position of the element of the array moves.
            // the event.target.id targets the id of the image which was clicked.
            this.element = this.matrix[this.moves.indexOf(event.target.id)][Math.floor(Math.random()*3)].toString();
            console.log(this.element);
        }
        // calculate the winner whereby the output to player or computer is implicit. It is implicit since this.element is calculated during runtime
        // and based on this we target the relevant element of this.score
        calculateWinner(matrixElement) {
            if(this.element !="0") {
                 this.score[this.element].html((this.tally[this.element]) ++ );
                 this.message.text(`${this.players[this.element]} wins!`);
            }else {
                this.message.text("tie!");
            }
        }
        play() {
            this.matrixElements();
            this.calculateWinner();
        }
    }
