import React, { CSSProperties } from 'react'

const sectionStylo:CSSProperties = {
    display: 'flex',
    alignItems : 'center',
    gap: 10,
    marginTop: 10,
}

export interface ItemCounterProps{
    id:number,
    productName: string,
    quantity: number,
    price: number,
}

export const ItemCounter = ({productName:name, quantity}:ItemCounterProps) => {
    return (
        <section style={sectionStylo}>

            <span style={{
                width:150
            }}>
                {name}
            </span>
            <button>+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    )
}