import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItems from "./ProductItems";
import { dummyProducts } from "./DummyProducts";

const Products = () => {
 


  
  const renderProducts = dummyProducts.map((product) => {
    return (
      <ProductItems
        key={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        image={product.image}
      />
    );
  });



  return (
    <React.Fragment>
      <div>
        <div className='off_canvars_overlay'></div>
        <Header />
        <div className='breadcrumbs_area'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='breadcrumb_content'>
                  <ul>
                    <li>
                      <a href='index-2.html'>home</a>
                    </li>
                    <li>Product details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row product-list'>{renderProducts}</div>

        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Products;
