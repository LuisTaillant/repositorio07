import React from "react";
import { Link, useParams } from "react-router-dom";

const ItemDetail = ({ product }) => {
  console.log(product.id);

  return (
    <>
      <div key={product.id} className="col-md-4">
        <div className="card w-100 mt-5">
          <div className="card-header">{`${product.name} - ${product.category}`}</div>
          <div className="card-body">
            <img src={product.imag} alt="" className="w-50" />
            <h4>Stock: {product.stock}</h4>
            <h4>Price: ${product.price}</h4>
          </div>
          <div className="card-footer">
            <Link to={`./cart`}>
              <button className="btn btn-outline-primary btn-block">
                Agregar al carrito
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
