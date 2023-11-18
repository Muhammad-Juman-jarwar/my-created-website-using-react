import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import "./Cart.css";


const Cart = () => {

  const getdata = useSelector((state)=> state.cartreducer.carts);

  return (
    <div className='cart'>
      <Header />
            <div className='cart__center__title'>
              <h2>Shopping Cart</h2>
            </div>
      <div className='cart__container'>
        <div className='cart__left'>
          <Scrollbars style={{ width: 500, height: 500 }}>
              {getdata.map((item) => (
            <div className='cart__left__items'>
                <div className='cart__left__item'>
                  <div className='cart__left__item__image'>
                    <img className="cartimg" src={item.image} alt='' />
                  </div>
                  <div className='cart__left__item__details'>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: 300</p>
                  </div>
                </div>
            </div>
              ))}
          </Scrollbars>
        </div>
        <div className='cart__right'>
          <div className='cart__right__items'>
            <div className='cart__right__item'>
              <div className='cart__right__item__details'>
                <h3>Subtotal</h3>
                <p>Price: $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
