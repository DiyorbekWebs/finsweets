import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Button from "../library/Button";
import style from "./header.module.scss";
const Header = () => {
  const logo=require("../../assets/img/Logo.png")
  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.header__nav}>
          <img className={style.header__logo} src={logo} alt="logo" />
          <div className={style.header__wrapper}>
            <ul className={style.header__list}>
                <Link className={style.header__item}>Home</Link>
                <Link className={style.header__item}>About us</Link>
                <Link className={style.header__item}>Features</Link>
                <Link className={style.header__item}>Pricing</Link>
                <Link className={style.header__item}>FAQ</Link>
                <Link className={style.header__item}>Blog</Link>
                <Link className={style.header__item}>Blog</Link>
            </ul>
            <Button className={''} color={'white'} >Contacs</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
