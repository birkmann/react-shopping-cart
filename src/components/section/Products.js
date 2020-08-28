import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'

import '../styles/products.scss'

export class Products extends Component {
  static contextType = DataContext
  render() {
    const { products } = this.context
    return (
      <DataContext.Provider value={{ products }}>
        <div className='products'>
          {products.map((product) => (
            <div className='product' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className='image-wrapper'>
                  <img src={product.image} alt='' />
                </div>
              </Link>
              <div className='content'>
                <div className='price'>{product.price}€</div>

                <Link to={`/product/${product.id}`}>
                  <h3>{product.title}</h3>
                </Link>
                <p>{product.category}</p>
                <button onClick={() => this.context.addCart(product.id)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </DataContext.Provider>
    )
  }
}

export default Products
