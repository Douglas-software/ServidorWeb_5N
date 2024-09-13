//Se importa todo de data.ts
import {
    idiomas,
    IIdioma,
    instructores,
    IInstructor,
    aprendizajes,
    IAprendizaje,
} from "./1.data"

function mostrarArreglos(){
    // forEach idiomas
    console.log("Idiomas:");
    idiomas.forEach(idioma => {
        console.log(`ID: ${idioma.id}, Descripción: ${idioma.descripcion}`);
    });

    // for in instructores
    console.log("\nInstructores:");
    for (const index in instructores) {
        const instructor = instructores[index];
        console.log(`ID: ${instructor.id}, Nombre: ${instructor.nombre}, Fecha de Nacimiento: ${instructor.fechaNacimineto.toDateString()}, Experiencia: ${instructor.experiencia}`);
    }

    // for of aprendizajes
    console.log("\nAprendizajes:");
    for (const aprendizaje of aprendizajes) {
        console.log(`ID: ${aprendizaje.id}, ID Idioma: ${aprendizaje.idIdioma}, ID Instructor: ${aprendizaje.idInstructor}, Fecha: ${aprendizaje.fecha.toDateString()}, Hora: ${aprendizaje.hora}, Número de Horas Curso: ${aprendizaje.numeroHorasCurso}, Nivel: ${aprendizaje.nivel}`);
    }
    
}

//Se exporta la funcion de mostrar
export{
    mostrarArreglos,
}