import React from 'react'
import ProductCard from './ProductCard'
import { foodProductCards } from '../MockData/data'
const ProductCards = () => {
    const cardsData= foodProductCards
  return (
        <div className="flex flex-wrap gap-3 items-center justify-center">
        {cardsData.map((card,index) =>{
            return card.priceThen ?  <ProductCard  key={index} id={card.id} imageUrl={card.imageUrl} name={card.name} priceNow={card.priceNow } priceThen={card.priceThen}/>:  <ProductCard key={index} id={card.id} imageUrl={card.imageUrl} name={card.name} priceNow={card.priceNow }/>
            })};
    </div>
  )
}

export default ProductCards

// {cardsData.map(card =>{
    // return <ProductCard key={card.id} {...card}/>  //spread operator is used to pass all properties of card object as props to ProductCard component.  //This way we can avoid passing each property individually.  //This is a good practice as it improves readability and maintainability of the code.  //Also, this approach can be used to pass any number of properties to a component.  //For example, if we want to pass additional properties like 'description' or 'rating' to ProductCard component, we can do so by adding them as key-value pairs in the card object and then passing them to ProductCard component using the spread operator.  //Also, this approach can be used to pass any number of properties to a component.  //For example, if we want to pass additional properties like 'description' or 'rating' to ProductCard component, we can do so by adding them as key-value pairs in the card object and then
// })}