<script>
	import { onMount } from "svelte"

    onMount(()=>{

//my gameboard wil be an array 3x3 
	/**
	 * @type {string[]}
	 */
     let gameboard = [];
let gameSize = 3;

// cells are the button to play the game
let cells = window.document.querySelectorAll('button.cell')
let cell_size = 100;

//Players 
let players = ["X","O"];

// by default first Player is X
let pXIsPlaying = true;
let whoIsPlaying = document.querySelector('p#player')

//Select a player buttons
let playerXbutton = document.querySelector('#playerX')
let playerObutton = document.querySelector('#playerO')

let gagne = false;

const init = ()=>{
    for(let i =0 ; i< gameSize *3 ; i++){          
        gameboard[i]=' ';   
    }   
    fill()
}

const fill = () => {
    for(let i =0; i<cells.length ; i++){
        cells[i].innerHTML = gameboard[i];
        cells[i].nodeValue =""
    }
    whoIsPlaying && (whoIsPlaying.innerHTML = pXIsPlaying ? "Current Player is : X" : "Current Player is : O" );
}

const playMove = ()=> {
    if(pXIsPlaying){
        pXIsPlaying = !pXIsPlaying;
        return players[0];
    }else {
        pXIsPlaying = !pXIsPlaying;
        return players[1];
    }
}

const gotCellToPlay = ()=>{
    let anyCellOpen = false;
    cells.forEach( cell =>{
        console.log(cell.nodeValue)
        if(cell.nodeValue === null) anyCellOpen = true;
    })
    return anyCellOpen;    
}

const verify = () => {
    //verifier la case central
    if(cells[4].innerHTML != " "){
        if( 
            ( cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML )      //ligne central
            || ( cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML )   //colonne central
            || ( cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML )   //diagonale haut-gauche to bas-droite
            || ( cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML )   //diagonale haut-droite to bas-gauche
            ) {
                alertWin()
                resetGame()
            }
    }
    if(cells[0].innerHTML != " " ) {
        if(
            ( cells[0].innerHTML === cells[1].innerHTML && cells[0].innerHTML === cells[2].innerHTML )      //1er ligne 
            || ( cells[0].innerHTML === cells[3].innerHTML && cells[0].innerHTML === cells[6].innerHTML )      //1er colonne 
        ){
            alertWin()
            resetGame()
        }
    }
    if(cells[8].innerHTML != " "){
        if(
            ( cells[8].innerHTML === cells[7].innerHTML && cells[8].innerHTML === cells[6].innerHTML )      //3eme ligne 
            || ( cells[8].innerHTML === cells[5].innerHTML && cells[8].innerHTML === cells[2].innerHTML )      //3eme colonne 
        ){
            alertWin()
            resetGame()
        }
    }
    console.log(gotCellToPlay())
    if(!gotCellToPlay()){
        alert("Match nul")
        resetGame()
    }

    return gagne;
}

const alertWin = ()=>{
    let winner = pXIsPlaying ?  "O" : "X";
    alert("The Winner is Player "+ winner)
}

const resetGame = () => {

    window.location.reload()
}

const fillIn = (/** @type {{ target: { value: string; textContent: string; }; }} */ event) =>{
    if(event.target.value == ""){
        event.target.value= pXIsPlaying ? "X" : "O";
        event.target.textContent= playMove();

            whoIsPlaying.textContent = pXIsPlaying ? "Current Player is : "+players[0] : "Current Player is : "+players[1] 
        ;
        verify()  
    }
    else{
        alert('You cant play here !')
    }
}

cells.forEach( (cell) => { 
    // cell.addEventListener("fullscreenchange",()=>{})
    cell.addEventListener("click",fillIn) 
})
playerXbutton?.addEventListener('click', ()=>{  pXIsPlaying=true; fill(); 
    // @ts-ignore
    playerXbutton&& (playerXbutton.disabled = true); 
    // @ts-ignore
    playerObutton&& (playerObutton.disabled = true); 
})

playerObutton?.addEventListener('click', ()=>{  pXIsPlaying=false;fill();
    // @ts-ignore
    playerXbutton&& (playerXbutton.disabled = true); 
    // @ts-ignore
    playerObutton&& (playerObutton.disabled = true); 
    
    })

init()
    })


</script>

<div class="centered">
    <header>

    ## TicTacToe
    
    </header>
    <br>
    <h2>     <p id="player"></p>    </h2>

    <main >
        
        
        <!-- Display UI -->
        <aside id="Selector">
            <head>
                <h2>Select a Player</h2>
                
            </head>
        <div >
            <div>
                <button id="playerX"><h1><b>X</b></h1></button>
            </div>
            <div>
                <button id="playerO"><h1><b>O</b></h1></button>
            </div>
            
        </div>
            <footer><p>A selection will restart the game</p></footer>
        </aside>  
        <section >
            <table id="game" >
                <tr>
                    <td> <button class="cell"></button> </td>
                    <td> <button class="cell"></button> </td>
                    <td> <button class="cell"></button> </td>
                </tr>
                <tr>
                    <td> <button class="cell"></button> </td>
                    <td> <button class="cell"></button> </td>
                    <td> <button class="cell"></button> </td>
                </tr>
                <tr>
                    <td> <button class="cell"></button> </td>
                    <td> <button class="cell"></button> </td>
                    <td> <button class="cell"></button> </td>
                </tr>         
            </table>            
        </section>

       
    </main>
    
</div>



<style>
    .centered {
    border: 2px solid black;
    padding: 1.8em;
    background-color: darkslategrey;
    color: floralwhite;
    font-family: 'Arial Narrow Bold', sans-serif;
    font-style: oblique;
    box-shadow: rgb(219, 217, 212) 2px 2px 20px;
        
}

header{
    text-align: center;
    font-size: 5vw;
    font-weight: bolder;
}

main{
    display: flex;
}

section{
    margin:5vh 5vw auto 10vw;
    display: flex;
    flex-direction: row;
}

#game{
    margin: auto;
    box-shadow: rgb(219, 217, 212) 2px 2px 20px;
}

#Selector{
    margin: auto 5vw auto 15vw;
}

#player{
    text-decoration: underline;
    /* box-shadow: lawngreen 5px -5px 50px; */
}

p {
    text-align: center;
}

table#game button{
    border:4px;
    width:150px;
    height:150px;
    font-size: 6vw;
    text-align: center;
    font-display: bold;
    background-color: darkseagreen;
    box-shadow: rgb(1, 79, 82) 4px 3px 5px ;
}

aside{
    text-align: center;
}

aside button{
    width: 100px;
    height: 100px;
    background-color: forestgreen;
    /* box-shadow: darkolivegreen 4px 3px 15px ; */
}
</style>