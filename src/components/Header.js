import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/header.scss'

export class Header extends Component {
  render() {
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
              <span className='items-in-cart'>0</span>
              <span>Items in Cart</span>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
