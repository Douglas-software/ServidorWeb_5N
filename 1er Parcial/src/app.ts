// import { nombreEstudiante1, operacionMatematica } from './ejemplo'
// console.log(operacionMatematica({ a: 7, b: 8, operador: '*' }))

// import { estudiantes } from './ejemplo'
// console.log(estudiantes)

// import { callback } from './ejemplo'
// callback(7,8,(a,b)=>a*b,(resultado)=>{
// console.log(resultado);//5
// })

//Mostrar Arreglos con el FOR
import { mostrarArreglos } from "./practica1-11sept"
console.log(mostrarArreglos());

//Funcion de busqueda con AsynAwait
import { getAprendizajeByIdaa } from './practica1-11sept/asynAwait'
(async () => {
    try {
        const aprendizaje = await getAprendizajeByIdaa(1);
        console.log(aprendizaje)
    } catch (error) {
        console.log(error)
    }
})()

//Funcion de busqueda con Promises
import { IAprendizaje } from './practica1-11sept/1.data'
import { getAprendizajeByIdUsingPromises, } from './practica1-11sept/promises'
getAprendizajeByIdUsingPromises(1)
    .then((aprendizaje: IAprendizaje) => {
        console.log(aprendizaje);
        return aprendizaje;
    })
    .catch(error => console.log(error))


//Servicio Rest
import { IPost, fetchData } from './practica1-11sept/servicioRest'
fetchData<IPost>('https://api.escuelajs.co/api/v1/products')
    .then((data: IPost[]) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });