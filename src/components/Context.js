import React, { Component } from 'react'

export const DataContext = React.createContext()

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: '1',
        title: 'Polaroid OneStep+ White (9015)',
        src:
          'https://images-na.ssl-images-amazon.com/images/I/715aC71nXEL._AC_SL1500_.jpg',
        desciption: 'polaroid cameras',
        content:
          'The Polaroid one step+ is a new Analog instant camera that connects to your smartphone via Bluetooth, unlocking a world of creative photography. Use the integrated Polaroid Originals app to explore fun techniques like double exposures and light painting, take full creative control with manual mode and a remote trigger, or frame your perfect close-up with the additional portrait lens. Download the Polaroid Originals smartphone app from the Apple app store or the Google play Store.',
        price: 132.57,
        count: 1,
      },
      {
        _id: '2',
        title: 'PlayStation 4 Pro 1TB Console',
        src:
          'https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg',
        desciption: 'Consoles',
        content:
          'The most advanced PlayStation system ever. PS4 Pro is designed to take your favorite PS4 games and add to them with more power for graphics, performance, or features for your 4K HDR TV, or 1080p HD TV. Ready to level up?',
        price: 399.99,
        count: 1,
      },
      {
        _id: '3',
        title: 'Fitbit Charge 4 Fitness',
        src:
          'https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg',
        desciption: 'fit bit',
        content:
          'Use built-in GPS to see your pace and distance on screen during outdoor runs, rides, hikes and more and see a workout intensity map in the app that shows your heart rate changes along your route',
        price: 146.0,
        count: 1,
      },
    ],
  }

  render() {
    const { products } = this.state
    return (
      <DataContext.Provider value={{ products }}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
