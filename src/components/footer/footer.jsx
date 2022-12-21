import React from "react";
import style from "./footer.module.scss";
import "../../App.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const logo = require("../../assets/img/Logo.png");

  return (
    <footer className={style.footer}>
      <div className={"container"}>
        <div className={style.footer__box}>
          <div className={style.footer__right}>
            <div className={style.footer__texts}>
              <img src={logo} className={style.footer__logo} alt="logo" />
              <p className={style.footer__paragrf}>
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </div>
            <div className={style.footer__contact}>
              <p className={style.footer__cont}>
                Email me at
                <br /> <span>contact@website.com</span>
              </p>
              <p className={style.footer__cont}>
                Call us
                <br /> <span>0927 6277 28525</span>
              </p>
            </div>
          </div>

          <div className={style.footer__left}>
            <h1 className={style.footer__boldText}>Lets Talk!</h1>
            <p className={style.footer__paragrf}>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className={style.footer__icons}>
                {/* <BsInstagram//> */}
            </div>
          </div>
        </div>
        <nav className={style.footer__nav}>
        <p className={style.footer__logotext}>Copyright 2021, Finsweet.com</p>
        <ul className={style.footer__list}>
                <Link className={style.footer__item}>Home</Link>
                <Link className={style.footer__item}>About us</Link>
                <Link className={style.footer__item}>Features</Link>
                <Link className={style.footer__item}>Pricing</Link>
                <Link className={style.footer__item}>FAQ</Link>
                <Link className={style.footer__item}>Blog</Link>
                <Link className={style.footer__item}>Blog</Link>
            </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
