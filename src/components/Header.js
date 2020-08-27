import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/header.scss'
import { DataContext } from './Context'

export class Header extends Component {
  static contextType = DataContext

  render() {
    const { cart } = this.context
    return (
      <header className='header-main'>
        <div className='container'>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/product'>Products</Link>
              </li>
            </ul>
          </nav>
          <div className='cart'>
            <Link to='cart'>
              <span className='items-in-cart'>{cart.length}</span>
              <span>Items in Cart</span>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
