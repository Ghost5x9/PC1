
function devolverCasilla(i,j){
    return document.getElementById(i+"_"+j)
}
let casilla=null

function casillaOnClick(i, j) {
    console.log("Hizo Click en", i, j);
    
    casilla = devolverCasilla(i, j);
    let casilla_espejo = devolverCasilla(15-i,15-j);
    let casillaarri = devolverCasilla(i-1,j);
    let casillaabajo = devolverCasilla(i+1,j);
    let casilladera = devolverCasilla(i,j+1);
    let casillaiz = devolverCasilla(i,j-1);
    

    if(casilla){
        casilla.innerHTML = "X";;
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
    }
    else{
        
    }

}


main()