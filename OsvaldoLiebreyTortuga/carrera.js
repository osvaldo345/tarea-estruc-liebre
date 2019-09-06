class Corredor {
    constructor() {
        this._posicionDos = 0;
    }
    
    get posicion(){
        return this._posicionDos;
    }

    /*set posicion(posicionDos){
        this._posicionDos = posicionDos;

    }*/
}



class Dado{
    constructor() {

    }
    lanzar(){
        return Math.trunc(Math.random() * this.probabilidad + 1);
        
    }
}


class Liebre extends Corredor{
    constructor(posicionDos, probabilidadDos){
        super(posicionDos);
        this._probabilidad = probabilidadDos;

    }

    avanceLiebre(pasoLiebre){
        let probabilidadDos = 20;
        var pasoLiebre = d1.lanzar(probabilidadDos);
        if (pasoLiebre == 1 || pasoLiebre == 2) { 
            this._posicionDos = -12;
        } else if (pasoLiebre == 3 || pasoLiebre == 4 || pasoLiebre == 5) { 
            this._posicionDos = -2;
        } else if (pasoLiebre == 6 || pasoLiebre == 7 || pasoLiebre == 8 || pasoLiebre == 9) { 
            this._posicionDos = 0;
        } else if (pasoLiebre == 10 || pasoLiebre == 11 || pasoLiebre == 12 || pasoLiebre == 13) { 
            this._posicionDos = 9;
        } else { 
            this._posicionDos = 1;
    }
    return this._posicionDos;
        }
}

class Tortuga extends Corredor{
    constructor(posicionDos){
        super(posicionDos)

    }
    probabilidadDos = 10;

    avanceTortuga(pasoTortuga){
        this.probabilidadDos = 10;
        var pasoTortuga = d1.lanzar(this._probabilidadDos);
        if (pasoTortuga == 1 || pasoTortuga == 2) { 
            this._posicionDos += -6;
        } else if (pasoTortuga == 3 || pasoTortuga == 4 || pasoTortuga == 5) { 
            this._posicionDos += 1;
        } else {  
            this._posicionDos += 3;
        
        }
        return this._posicionDos;
        }

}

class Carrera{
    constructor(){}


    ganador(){
        var liebre = new Liebre();
        var tortuga = new Tortuga();
        let pasoLiebre = 0;
        let pasoTortuga =  0;
        
        while(pasoTortuga <= 90 && pasoLiebre < 90){
            pasoTortuga = pasoTortuga + tortuga.avanceTortuga();
            pasoLiebre = pasoLiebre + liebre.avanceLiebre();
            console.log('posicion Tortuga ' + tortuga.avanceTortuga());
            console.log('posicion Liebre ' + liebre.avanceLiebre());
        }
        if(pasoLiebre >= 90 && pasoTortuga < 90) {
            console.log('Liebre gana la carrera');
        }
        else if(pasoLiebre <= 90 && pasoTortuga > 90) {
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