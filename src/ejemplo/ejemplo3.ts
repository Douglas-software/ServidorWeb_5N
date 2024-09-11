interface INota {
    materia: string;
    notaPrimerParcial: number;
}
interface IDireccion {
    calle: string;
    numero: number;
}
interface IEstudiante {
    nombre: string,
    edad: number,
    direcciones: IDireccion[];
    notas: INota[];
}


const estudiantes: IEstudiante[] = [
    {
        nombre: "Douglas",
        edad: 20,
        direcciones: [
            {
                calle: "Manta",
                numero: 1,
            },
            {
                calle: "Manta",
                numero: 2,
            },
            
        ],
        notas: [
            {
                materia: "Algoritmos",
                notaPrimerParcial: 10,
            }
        ]

    }
]
export {
    estudiantes,
    IEstudiante,
    IDireccion,
    INota
}
