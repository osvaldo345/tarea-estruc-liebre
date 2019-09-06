class Corredor {
    constructor() {
        this._posicionDos = 0;
    }
    
    get posicion(){
        return this._posicionDos;
    }

    set posicion(posicionDos){
        this._posicionDos = posicionDos;

    }
}



class Dado{
    constructor() {

    }
    lanzar(){
        return Math.trunc(Math.random() * probabilidadDos + 1);
        
    }
}


class Liebre extends Corredor{
    constructor(posicionDos, probabilidadDos){
        super(posicionDos);
        this._probabilidad = probabilidadDos;

    }

    avanceLiebre(pasoLiembre){
        let probabilidadDos = lanzar.probabilidadDos = 20;
        var pasoLiembre = d1.lanzar(probabilidadDos);
        if (l == 1 || pasoLiembre == 2) { //10%
            posicionDos += -12;
        } else if (pasoLiembre == 3 || pasoLiembre == 4 || pasoLiembre == 5) { //15%
            posicionDos += -2;
        } else if (pasoLiembre == 6 || pasoLiembre == 7 || pasoLiembre == 8 || pasoLiembre == 9) { //20%
            posicionDos += 0;
        } else if (pasoLiembre == 10 || pasoLiembre == 11 || pasoLiembre == 12 || pasoLiembre == 13) { //20%
            posicionDos += 9;
        } else {  //35%
            posicionDos += 1;
    }
    return posicionDos;
        }
}

class Tortuga extends Corredor{
    constructor(posicionDos){
        super(posicionDos)

    }
    probabilidadDos = 10;

    avanceTortuga(pasoTortuga){
        this.probabilidadDos = 10;
        var pasoTortuga = d1.lanzar(probabilidadDos);
        if (pasoTortuga == 1 || pasoTortuga == 2) { //20%
            posicionDos += -6;
        } else if (pasoTortuga == 3 || pasoTortuga == 4 || pasoTortuga == 5) { //30%
            posicionDos += 1;
        } else {  //50%
            posicionDos += 3;
        
        }
        return posicionDos;
        }

}

class Carrera{
    constructor(){


    }
    ganador(){
        var liebre = new Liebre();
        var tortuga = new Tortuga();
        let pasoLiembre = liebre.avanceLiebre();
        let pasoTortuga = tortuga.avanceTortuga();
        
        while(tortuga.posicionDos < 90 && liebre.posicionDos < 90){
            tortuga.avanceTortuga();
            liebre.avanceLiebre();
            console.log('posicion Tortuga ' + tortuga.avanceTortuga());
            console.log('posicion Liebre ' + liebre.avanceLiebre());
        }
        if(pasoLiembre > 90 && pasoTortuga < 90) {
            console.log('Liebre gana la carrera');
        }
        if(pasoLiembre < 90 && pasoTortuga > 90) {
            console.log('La tortuga gana la carrera');
        }
        else {
            console.log('Empate');
        }
        }

    }

d1 = new Dado;
var ganar = new Carrera();
console.log(ganar.ganador());