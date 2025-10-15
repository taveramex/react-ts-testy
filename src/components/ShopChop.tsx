import { ItemCounter, ItemCounterProps } from '../shopping-cart/ItemCounter'

const products:ItemCounterProps[] = [
  {id:1, productName:'Perrito Kawaii', quantity:7, price:10000},
  {id:2, productName:'Loro', quantity:1, price:20},
  {id:3, productName:'Gato Gordo generico', quantity:1, price:630},
  {id:4, productName:'Kuckee lorito', quantity:34, price:2400},
  {id:5, productName:'rock', quantity:9999, price:12},
  {id:6, productName:'Pez', quantity:231, price:15},
]

const ShopChop = () => {
  return (
    <>
      <h1>welcome to some shady shop to chop</h1>
      <p>heres our products</p>

      { products.map(({id:key, productName:name, quantity}) => (<ItemCounter key={key} productName={name} quantity={quantity} /> )) }
    
    </>
  )
}

export default ShopChop;
