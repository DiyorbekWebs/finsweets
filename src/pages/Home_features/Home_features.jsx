import React from "react";
import style from "./home_fetures.module.scss";
import "../../App.css";
import { Button } from "../../components/library";
const Features = () => {
  return (
    <div className={style.home}>
      <div className="container">
        <div className={style.home__box}>
          <div className={style.home__right}>
            <h1 className={style.home__boldText}>All the features you need</h1>
            <p className={style.home__paragrf}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className={"backYellow"} child1={'View Pricing'}/>
            
           
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Features;
