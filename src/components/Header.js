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
          <div className='cart-icon'>
            <Link to='/cart'>
              <span className='items-in-cart'>{cart.length}</span>
              <span className='text'>Items in Cart</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z'
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
