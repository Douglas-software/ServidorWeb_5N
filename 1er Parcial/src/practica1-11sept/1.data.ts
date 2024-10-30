//Se crean las interfaces
interface IIdioma {
    id: number;
    descripcion: string;
}
interface IInstructor {
    id: number;
    nombre: string;
    fechaNacimineto: Date;
    experiencia: string;
}
interface IAprendizaje {
    id: number;
    idIdioma: number;
    idInstructor: number;
    fecha: Date;
    hora: number;
    numeroHorasCurso: number;
    nivel: string;
}

//Arreglos
const idiomas: IIdioma[] = [
    {
        id: 1,
        descripcion:"Ingles",
    },
    {
        id: 2,
        descripcion:"Frances",
    },
    {
        id: 3,
        descripcion:"Spanish",
    },
    {
        id: 4,
        descripcion:"Italiano",
    },
    {
        id: 5,
        descripcion:"Chino",
    },
]
const instructores: IInstructor[] = [
    {
        id: 1,
        nombre: "Kevin",
        fechaNacimineto: new Date("1999-01-20"),
        experiencia: "poca"
    },
    {
        id: 2,
        nombre: "Calderon",
        fechaNacimineto: new Date("1999-02-20"),
        experiencia: "mucha"
    },
    {
        id: 3,
        nombre: "Enner",
        fechaNacimineto: new Date("1999-03-20"),
        experiencia: "mucha"
    },
    {
        id: 4,
        nombre: "Kitu",
        fechaNacimineto: new Date("1999-04-20"),
        experiencia: "poca"
    },
    {
        id: 5,
        nombre: "Yeboah",
        fechaNacimineto: new Date("1999-05-20"),
        experiencia: "mucha"
    },
]
const aprendizajes: IAprendizaje[] = [
    {
        id: 1,
        idIdioma: 1,
        idInstructor: 1,
        fecha: new Date("2024-09-11"),
        hora: 30,
        numeroHorasCurso: 20,
        nivel: "alto",
    },
    {
        id: 2,
        idIdioma: 2,
        idInstructor: 2,
        fecha: new Date("2024-09-11"),
        hora: 30,
        numeroHorasCurso: 20,
        nivel: "alto",
    },
    {
        id: 3,
        idIdioma: 3,
        idInstructor: 3,
        fecha: new Date("2024-09-11"),
        hora: 30,
        numeroHorasCurso: 20,
        nivel: "alto",
    },
    {
        id: 4,
        idIdioma: 4,
        idInstructor: 4,
        fecha: new Date("2024-09-11"),
        hora: 30,
        numeroHorasCurso: 20,
        nivel: "alto",
    },
    {
        id: 5,
        idIdioma: 5,
        idInstructor: 5,
        fecha: new Date("2024-09-11"),
        hora: 30,
        numeroHorasCurso: 20,
        nivel: "alto",
    },
]

//Se exporta todo
export{
    idiomas,
    IIdioma,
    instructores,
    IInstructor,
    aprendizajes,
    IAprendizaje,
}