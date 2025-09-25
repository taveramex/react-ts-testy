import React, { CSSProperties } from 'react'

const sectionStylo:CSSProperties = {
    display: 'flex',
    alignItems : 'center',
    gap: 10,
    marginTop: 10,
}

export const ItemCounter = () => {
    return (
        <section style={sectionStylo}>
            <span style={{
                width:150
            }}>
                Nintendo Switch 2
            </span>
            <button>+1</button>
            <span>10</span>
            <button>-1</button>
        </section>
    )
}