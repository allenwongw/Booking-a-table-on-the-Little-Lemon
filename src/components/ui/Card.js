import React from "react";
import classes from "./Card.module.css";

export default function Card({
  image,
  name,
  title,
  price,
  description,
  url = "",
}) {
  return (
    <div className={classes.card}>
      <div></div>
      <img src={image} alt={name} />
      <div className={classes.descriptionContainer}>
        <div className={classes.titlePriceContainer}>
          <p className={classes.title}>{title}</p>
          <p className={classes.price}>{price}</p>
        </div>
        <p className={classes.description}>{description}</p>
      </div>
      <a href={url}>Order a delivery 🛵</a>
    </div>
  );
}
