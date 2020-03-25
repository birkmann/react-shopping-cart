import React from "react";
import "./index.scss";

const addFunc = props => {
  console.log("clicked");
};

export const Product = props => {
  return (
    <div className='product'>
      <img src={props.image} alt={props.name} />
      <div className='details'>
        <div className='brand'>{props.brand}</div>
        <div className='name'>{props.name}</div>
        <div className='price'>{props.price} $</div>
      </div>
      <button onClick={() => addFunc({ props })}>Add to cart</button>
    </div>
  );
};
