import React from "react";
import { Link } from "react-router-dom";

const Card = ({ products: { id, img, title, price } }) => {
  return (
    <article key={id} className="card">
      <img src={img} alt={title} className="card-img" />
      <h3 className="card-title">{title}</h3>

      <div className="detail">
        <h4 className="card-price">{price}</h4>
        <Link to={id.toString()} className="btn">
          Detail
        </Link>
      </div>
    </article>
  );
};

export default Card;
