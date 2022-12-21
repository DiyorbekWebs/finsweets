import React from "react";
import Header from "../../components/home_hero/hero";
import Project from "../../components/projekt/project";
import Work from "../../components//work/work";
import Features from "../../components/featuers/features";
import Clyents from "../../components/clyents/clyents";
import Login from "../../components/login/login";

const Home = () => {
  return (
    <>
      <Header />
      <Work />
      <Project />
      <Features />
      <Clyents />
      <Login />
    </>
  );
};

export default Home;
