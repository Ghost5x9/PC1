
function devolverCasilla(i,j){
    return document.getElementById(i+"_"+j)
}
let casilla=null

function casillaOnClick(i, j) {
    console.log("Hizo Click en", i, j);
    
    casilla = devolverCasilla(i, j);
    
    let casillaarri = (i-1,j);
    let casillaabajo = (i+1,j);
    let casilladera = (i,j+1);
    let casillaiz = (i,j-1);

    if(casillaarri){
        casillaarri.innerHTML = "X";
    }

    if(casillaabajo){
        casillaabajo.innerHTML = "X";
    }

    if(casilladera){
        casilladera.innerHTML = "X";
    }
    
    if(casillaiz){
        casillaiz.innerHTML = "X";
    }
    
    casilla.disabled = true; 
}


main()