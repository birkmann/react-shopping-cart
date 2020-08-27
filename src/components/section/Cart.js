import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'

export class Cart extends Component {
  static contextType = DataContext

  render() {
    const { cart, reduction, increase } = this.context
    return (
      <>
        {cart.map((item) => (
          <div className='product-detail ' key={item._id}>
            <div className='image-wrapper'>
              <img src={item.src} alt='' />
            </div>
            <div className='text'>
              <h3>{item.title}</h3>
              <p>{item.desciption}</p>
              <p className='price'>{item.price} €</p>
              <div className='amount'>
                <button className='count' onClick={() => reduction(item._id)}>
                  -
                </button>
                <span>{item.count}</span>
                <button className='count' onClick={() => increase(item._id)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default Cart
