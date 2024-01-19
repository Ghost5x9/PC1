
function devolverCasilla(i,j){
    return document.getElementById(i+"_"+j)
}
let casilla=null

function casillaOnClick(i, j) {
    console.log("Hizo Click en", i, j);
    
    casilla = devolverCasilla(i, j);
    
    
    casilla.innerHTML="X;";
    
    casilla.disabled = true; 
}


main()