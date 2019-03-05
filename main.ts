//The Game class
class Game {
    //The constructor
    constructor(public name: string, public rating: number) { }
    
    //A function that returns the HTML object you need
    createListNode() :HTMLElement {
        //Create the nodes we'll need
        let newRow = document.createElement("tr");
        let nameCell = document.createElement("td");
        let rateCell = document.createElement("td");
        let nameText = document.createTextNode(this.name);
        let rateText = document.createTextNode(this.rating.toString());
        
        //Add the text
        nameCell.appendChild(nameText);
        rateCell.appendChild(rateText);

        //Add cells to row
        newRow.appendChild(nameCell);
        newRow.appendChild(rateCell);

        //Return the row
        return newRow;
    }
}

//Declare the variable to store the game.
let newGame: Game;

//The function that adds the game
function addGame() :void {

    //YOUR CODE GOES HERE

    let g = new Game((<HTMLInputElement>document.getElementById("name")).value, Number((<HTMLInputElement>document.getElementById("rating")).value));

    let row = g.createListNode();
    //console.log(g.createListNode().innerHTML);
    document.getElementById("games").appendChild(row);

}