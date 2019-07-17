import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"

function App3() {
    const productComponents = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} /> )
  return (
    <div>
        {productComponents}
    </div>
  )
}

export default App3