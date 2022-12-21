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
                <Link to='/' className={style.header__item}>Home</Link>
                <Link to='/about' className={style.header__item}>About us</Link>
                <Link to='/features' className={style.header__item}>Features</Link>
                <Link to='/' className={style.header__item}>Pricing</Link>
                <Link to='/' className={style.header__item}>FAQ</Link>
                <Link to='/' className={style.header__item}>Blog</Link>
                <Link to='/' className={style.header__item}>Blog</Link>
            </ul>
            <Button className={''} color={'white'} >Contacs</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
