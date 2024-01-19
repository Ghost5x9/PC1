
function devolverCasilla(i,j){
    return document.getElementById(i+"_"+j)
}
let casilla=null

function casillaOnClick(i, j) {
    console.log("Hizo Click en", i, j);
    
    casilla = devolverCasilla(i, j);
    
    if(casilla == True){
        let casillaarri = (i-1,j);
        let casillaabajo = (i+1,j);
        let casilladera = (i,j+1);
        let casillaiz = (i,j-1);
        casilla.innerHTML = "X";
        casillaabajo.innerHTML = "X";
        casilladera.innerHTML = "X";
        casillaarri.innerHTML = "X";
        casillaiz.innerHTML = "X";
    }
    
    casilla.disabled = true; 
}


main()