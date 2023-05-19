import React, { Component } from "react";
import { Fragment } from "react";
import HeaderComponent from "./Layout/header/Header";
import MainLayout from "./Layout/main-layout/MainLayout";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
          <HeaderComponent title="header"/>
          <MainLayout title="main container"/>
      </Fragment> 
    );
  }
}
 

export default Home;
