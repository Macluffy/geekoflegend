class Boss {
    constructor(nom,pv,pa){
        this.nom= nom;
        this.pv= pv;
        this.pa= pa;
    }
}


class Heros {
    constructor(nom,pv,pa){
        this.nom= nom;
        this.pv= pv;
        this.pa= pa;
        
    }
}

class Mage extends Heros {
    constructor(nom,pv,pa,pm){
        this.pm =pm;
        this.defense=()=>{

        }
        this.attaque=()=>{
            
        }
    }
    

}

let mage = new Mage(prompt("quel est le nom que vous voulez atrribuez avotre personnage ?"),prompt("nombre de point de vie attribuer a ce personnage"),pa,pm)

let mage = new Mage()

class Guerrier extends Heros {
    constructor(nom,pv,pa,pr){
        this.pr =pr;
        this.defense=()=>{

        }
        this.attaque=()=>{
            
        }
    }
    

}
class Archer extends Heros {
    constructor(nom,pv,pa,nf){
        this.nf =nf;
        this.defense=()=>{

        }
        this.attaque=()=>{
            
        }
    }
    

}
