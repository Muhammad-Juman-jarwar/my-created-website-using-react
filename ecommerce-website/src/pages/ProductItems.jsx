import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../store/action";
import { dummyProducts } from "./DummyProducts";
import "./ProductItems.css";

const ProductItems = () => {
  const [data, setData] = useState(dummyProducts);
  // console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };

  return (
    <div className='col-lg-4 col-md-6'>
      <div className='single_product'>
        {data.map((item) => {
          return (
            <>
        <div className='product_thumb'>
          <img src={item.image} alt='' />
          <div className='product_action'>
            <a href='#'>
              <i className='ion-android-favorite-outline'></i>
            </a>
            <a href='#'>
              <i className='ion-ios-shuffle-strong'></i>
            </a>
            <a href='#' onClick={()=> send(item)}>
              <i className='ion-android-cart'></i>
            </a>
          </div>
        </div>
        <div className='product_content'>
          <span className='product_price'>${item.price}</span>
          <h3 className='product_title'>
            <a href='product-details.html'>{item.name}</a>
          </h3>
        </div>
        <div className='product_info'>
          <ul>
            <li>
              <a href='#'>Add to wishlist</a>
            </li>
            <li>
              <a href='#'>compare</a>
            </li>
          </ul>
        </div>
        </>
)})};
      </div>
    </div>
  );
};

export default ProductItems;
