import React from "react";

import sushiImg from "../assets/sushi.jpg";
import classes from "./Hero.module.css";
export default function Hero({ onOpenLayout }) {
  return (
    <section className={classes.hero}>
      <div className={classes.heroContainer}>
        <div className={classes.WordingButtonContainer}>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are family owned
            <br /> Mediterranean restaurant, <br /> focused on traditional{" "}
            <br />
            {/*ByShihFengHsu*/}
            recipes sarved with a modern <br />
            twist.
          </p>
          <div className={classes.ButtonLayout}>
            <button
              className={classes.reservedButton}
              onClick={() => {
                onOpenLayout();
              }}
            >
              Reserve a Table
            </button>
          </div>
        </div>
        <img src={sushiImg} alt="sushiImg" className={classes.sushiImg} />
      </div>
    </section>
  );
}
