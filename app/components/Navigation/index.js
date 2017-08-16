/**
*
* Navigation
*
*/

import React from 'react';
// import styled from 'styled-components';
// import Cart from './style';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

function Navigation(props) {
  return (
    <nav className="navBar">
    <nav className="wrapper">
      <Link className="aLogo" to="/">
        <img src="https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png" />
      </Link>
      <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="label-toggle"></label>
      <ul>
        <Link href="#"><li>{props.service}</li></Link>
        <Link href="/reserve-list"><li>{props.reserv}</li></Link>
        <Link href="#"><li>{props.travel}</li></Link>
        <Link to='/login'><li>{props.login}</li></Link>
        <Link href="#"><li>{props.cart}<FontAwesome name={props.icon}></FontAwesome></li></Link>
        {/* <Cart>{props.count}</Cart> */}
      </ul>
    </nav>
  </nav>
  );
}

Navigation.propTypes = {

};

export default Navigation;
