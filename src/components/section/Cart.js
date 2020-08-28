import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'

export class Cart extends Component {
  static contextType = DataContext

  componentDidMount() {
    this.context.getTotal()
  }

  render() {
    const { cart, reduction, increase, removeProduct, total } = this.context
    if (cart.length === 0) {
      return <h2>No products in the cart.</h2>
    } else {
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
                <p className='price'>
                  {(item.price * item.count).toFixed(2)} €
                </p>
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
              <div className='delete' onClick={() => removeProduct(item._id)}>
                X
              </div>
            </div>
          ))}
          <div className='total'>
            <Link to='/payment'>Payment</Link>
            <h3>Total: {total.toFixed(2)} €</h3>
          </div>
        </>
      )
    }
  }
}

export default Cart
