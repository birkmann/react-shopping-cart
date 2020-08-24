import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'

export class Products extends Component {
  static contextType = DataContext
  render() {
    const { products } = this.context
    return (
      <DataContext.Provider value={{ products }}>
        <div className='products'>
          {products.map((product) => (
            <div className='product' key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img src={product.src} alt='' />
              </Link>
            </div>
          ))}
        </div>
      </DataContext.Provider>
    )
  }
}

export default Products
