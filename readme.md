# Assignment 1
Edit the code here so a new Game is added to the table of games. 

let g = new Game((<HTMLInputElement>document.getElementById("name")).value, Number((<HTMLInputElement>document.getElementById("rating")).value));

    let row = g.createListNode();
    //console.log(g.createListNode().innerHTML);
    document.getElementById("games").appendChild(row);