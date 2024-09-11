interface IEstudiante {
    id: number;
    nombre: string;
    edad: number;
    colegioId: number;
}

interface IColegio {
    id: number;
    nombre: string;
    ciudadID: number;
}

interface ICiudad {
    id: number;
    nombre: string;
}

const estudiantes: IEstudiante[] = [
    {
        id: 1,
        nombre: "Jordy",
        edad: 20,
        colegioId: 1
    },
    {
        id: 2,
        nombre: "Douglas",
        edad: 20,
        colegioId: 2
    }
]
const colegios: IColegio[] = [
    {
        id: 1,
        nombre: "Manta",
        ciudadID: 1
    },
    {
        id: 2,
        nombre: "4 De noviembre",
        ciudadID: 2
    }
]

const ciudades: ICiudad[] = [
    {
        id: 1,
        nombre: "Manta"
    },
    {
        id: 2,
        nombre: "Chone"
    }
]


export {
    IEstudiante,
    IColegio,
    ICiudad,
    estudiantes,
    colegios,
    ciudades
}