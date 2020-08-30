import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'

import '../styles/cart.scss'

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
        <div className='cart'>
          {cart.map((item) => (
            <div className='product ' key={item.id}>
              <div className='image-wrapper'>
                <img src={item.image} alt='' />
              </div>
              <div className='text'>
                <h3>{item.title}</h3>
                <p className='price'>
                  {(item.price * item.count).toFixed(2)} €
                </p>
                <div className='amount'>
                  <button className='count' onClick={() => reduction(item.id)}>
                    -
                  </button>
                  <span className='value'>{item.count}</span>
                  <button className='count' onClick={() => increase(item.id)}>
                    +
                  </button>
                </div>
                <div className='delete' onClick={() => removeProduct(item.id)}>
                  remove item
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z'
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          <div className='total'>
            <h3>Total: {total.toFixed(2)} €</h3>
            <Link to='/payment' className='pay-button'>
              Payment
            </Link>
          </div>
        </div>
      )
    }
  }
}

export default Cart
