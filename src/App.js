import React from "react";
import "./App.css";
import { Product } from "./components/product/index.jsx";

const products = [
  {
    id: 0,
    brand: "Puma",
    name: "Future Rider Play On Jr",
    price: 69.99,
    image:
      "https://www.snipes.com/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dw7b95c441/1813851_P.jpg?sw=600&sh=600&sm=fit&sfrm=png",
    quantityInCart: 0,
    inCart: false
  },
  {
    id: 1,
    brand: "Nike",
    name: "Mx-720-818",
    price: 130.0,
    image:
      "https://www.snipes.com/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dw7d647496/1786983_P.jpg?sw=600&sh=600&sm=fit&sfrm=png",
    quantityInCart: 0,
    inCart: false
  },
  {
    id: 2,
    brand: "Vans",
    name: "UA Authentic",
    price: 69.99,
    image:
      "https://www.snipes.com/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dw854441b1/1812743_P.jpg?sw=600&sh=600&sm=fit&sfrm=png",
    quantityInCart: 0,
    inCart: false
  }
];

const ShopList = props => {
  const items = () => {
    return products.map((key, index) => {
      return (
        <Product
          key={index}
          brand={key.brand}
          name={key.name}
          price={key.price}
          image={key.image}
        />
      );
    });
  };

  return <div className="product-list">{items()}</div>;
};

function App() {
  return <ShopList />;
}

export default App;
