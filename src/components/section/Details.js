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
        return item._id === this.props.match.params.id
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
    return (
      <>
        {product.map((item) => (
          <div className='product-detail ' key={item._id}>
            <div className='image-wrapper'>
              <img src={item.src} alt='' />
            </div>
            <div className='text'>
              <h3>{item.title}</h3>
              <p>{item.desciption}</p>
              <p className='price'>{item.price} €</p>
              <Link to='/cart' className='btn'>
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default Details
