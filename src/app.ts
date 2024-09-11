import { nombreEstudiante1, operacionMatematica } from './ejemplo'
console.log(operacionMatematica({ a: 7, b: 8, operador: '*' }))

import { estudiantes } from './ejemplo'
console.log(estudiantes)

import { callback } from './ejemplo'
callback(7,8,(a,b)=>a*b,(resultado)=>{
console.log(resultado);//5
})
