import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'

import '../styles/product-detail.scss'

export class Details extends Component {
  static contextType = DataContext

  state = {
    product: [],
  }

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products
      const data = res.filter((item) => {
        return item.id === this.props.match.params.id
      })
      console.log(data)
      this.setState({
        product: data,
      })
    }
  }

  componentDidMount() {
    this.getProduct()
  }

  render() {
    //console.log(this.context.products)
    const { product } = this.state
    const { addCart } = this.context
    return (
      <>
        {product.map((item) => (
          <div className='product-detail ' key={item.id}>
            <div className='image-wrapper'>
              <img src={item.image} alt='' />
            </div>
            <div className='text'>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <p>{item.description}</p>
              <p className='price'>{item.price} €</p>
              <button className='btn' onClick={() => addCart(item.id)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default Details
