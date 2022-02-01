import React from "react";
import { Link, useParams } from "react-router-dom";

const Item = ({ id, name, stock, category, price, imag }) => {
  return (
    <>
      <div key={id} className="col-md-4">
        <div className="card w-100 mt-5">
          <div className="card-header">{`${name} - ${category}`}</div>
          <div className="card-body">
            <img src={imag} alt="" className="w-50" />
            <h4>Stock: {stock}</h4>
            <h4>Price: ${price}</h4>
          </div>
          <div className="card-footer">
            <Link to={`/detalle/${id}`}>
              <button className="btn btn-outline-primary btn-block">
                detalle del producto
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
