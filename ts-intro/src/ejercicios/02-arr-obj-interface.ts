let habilidades = ['Bash', 'Counter', 'Healing']

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'PuebloSA'
console.log(personaje);

