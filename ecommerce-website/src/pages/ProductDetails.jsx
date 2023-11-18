import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductDetails = () => {
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
        <div className='container'>
          <h1 className='text-center'>Product Details</h1>
          <div className='row'>
            <div className='col-md-7'>
              <div className='row'>
                <div className='col-md-12'>
                  <img
                    className='img-thumbnail img-fluid center-block'
                    src='assets/img/mil_hojas_web_2000x.jpg'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-6 col-sm-6 col-md-6'>
                  <img
                    className='img-thumbnail img-fluid center-block'
                    src='assets/img/descarga.jpg'
                  />
                </div>
                <div className='col-6 col-sm-6 col-md-6'>
                  <img
                    className='img-thumbnail img-fluid center-block'
                    src='assets/img/descarga.jpg'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-6 col-sm-6 col-md-6 offset-3'>
                  <img
                    className='img-thumbnail img-fluid center-block'
                    src='assets/img/torta-de-milhojas.jpg'
                  />
                </div>
              </div>
            </div>
            <div className='col-md-5'>
              <h1>Torta Mil Hojas Manjar</h1>
              <p>
                <br />
                Clásica torta de mil hojas, rellena con manjar casero y huevo
                moll con almendras.
                <br />
                <br />
                Ingredientes:
                <br />
                para la masa
                <br />
                <br />3 tazas de harina cernida sin polvos de hornear
                <br />
                250 grs de mantequilla sin sal
                <br />3 yemas
                <br />¾ taza de leche
                <br />1 cucharada de pisco o ron
                <br />1 pizca de sal
                <br />
                <br />
                para el relleno
                <br />
                <br />3 tazas de manjar
                <br />2 1/2 taza de nueces molidas
                <br />¼ taza de azúcar flor
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
              <h2 className='text-center text-success'>
                <i className='fa fa-dollar' />
                &nbsp;CLP 22.500
                <br />
                <br />
                <br />
                <button
                  className='btn btn-danger btn-lg center-block'
                  type='button'
                >
                  <i className='fa fa-cart-plus' /> Añadir al Carrito
                </button>
              </h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default ProductDetails;
 