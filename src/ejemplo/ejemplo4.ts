interface IOperacion{
    (num1:number,num2:number):number;
}
function operacion(num1: number, num2: number,
    operacion: IOperacion,
    callback: (resultado: number) => void) {
        const resultado:number = operacion(num1, num2);
    callback(resultado);
}

export {
    operacion
}