class PersonaNormal {
    constructor(
        public nombre: String,
        public direccion: String
    ) {}
}

class Heroe extends PersonaNormal{
    constructor(
        public altereGO: String,
        public edad: number,
        public nombreReal: String
    ){
        super(nombreReal, "New York, USA");
    }
}

const ironman = new Heroe("Ironman", 45, "Tony");

console.log(ironman);