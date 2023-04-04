interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: String;
    detalles: Detalles
}
interface Detalles{
    autor:String;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "El nano",
    detalles: {
        autor: "Melendi",
        anio: 2015
    }
}

const { volumen: vol, segundo, detalles:{autor} } = reproductor;

// const { volumen, segundo, detalles } = reproductor;
// const { autor } = detalles;

console.log("Volumen: ", vol);
console.log("Segundo: ", segundo);
console.log("Cancion: ", reproductor.cancion);
console.log("Autor: ", autor);

const dbz: String[] = ["Goku", "Vegeta", "Trunks"];

const [ ,,p3 ] = dbz;

console.log("Personaje 1: ", dbz[0]);
console.log("Personaje 2: ", dbz[1]);
console.log("Personaje 3: ", p3);