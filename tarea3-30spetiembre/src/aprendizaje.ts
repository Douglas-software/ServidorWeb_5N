interface IAprendizaje {
    id: number;
    idIdioma: number;
    idInstructor: number;
    fecha: Date;
    hora: number;
    numeroHorasCurso: number;
    nivel: string;
}
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