interface IInstructor {
    id: number;
    nombre: string;
    fechaNacimineto: Date;
    experiencia: string;
}
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