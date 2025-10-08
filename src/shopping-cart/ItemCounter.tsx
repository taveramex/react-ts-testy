import { CSSProperties, useState } from 'react'
import styles from "./ItemCounter.module.css"

export interface ItemCounterProps{
    id?:number,
    productName: string,
    quantity?: number,
    price?: number,
}

export const ItemCounter = ({productName:name, quantity=1}:ItemCounterProps) => {
    const [count, setCount] = useState(quantity);
    const handleAdd = () => (setCount(count+1));
    const handleMinus = ()=> {
        if(count === 0) return;
        setCount(count-1)
    };
    const colorLow:CSSProperties = {
        color : (count===0)? 'red' : 'black',

    }

    return (
        <section className={styles.itemCounter}>

            <span className={styles.w150} style={colorLow}>
                {name}
            </span>
            <button onClick = {handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleMinus}>-1</button>
        </section>
    )
}