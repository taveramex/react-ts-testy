export const Add = (a:number, b:number)=> {
    return (a + b);
}

export const Substract = (a:number, b:number)=> {
    return (a - b);
}

export const Multiply = (a:number, b:number)=> {
    return (a * b);
}

export const Division = (a:number, b:number)=> {
    if( b===0 ) throw new Error("Division by Zero Bitch!");
    return (a / b);
}