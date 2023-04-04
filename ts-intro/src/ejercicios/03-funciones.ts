function sumar (a, b){
    return (a + b).toString();
}

const sumarFlecha = (a,b) => {
    return a + b;
}

function multiplica ( numero: number, otroNumero?: number, base:number = 2): number{
    return numero * base;
}

interface PersonajeLOR {
    nombre: String;
    pv: Number;
    mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curarX) {

    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pv: 50,
    mostrarHP(){
        console.log( "Puntos de vida: ", this.pv);
    }
}

curar (nuevoPersonaje, 20)
nuevoPersonaje.mostrarHP();