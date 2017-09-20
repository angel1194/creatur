/**
*
* Navigation
*
*/

import React, {PropTypes} from 'react';
import Cart from './style';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

function Navigation(props) {
  return (
    <nav className="navBar">
    <nav className="wrapper">
      <Link className="aLogo" to={props.toLink}>
        <img src="https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png"/>
      </Link>
      <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="label-toggle"></label>
      <ul>
        <Link href="#"><li>{props.li_1}</li></Link>
        <Link href="/reserve-list"><li>{props.li_2}</li></Link>
        <Link href="#"><li>{props.li_3}</li></Link>
        <Link to='/login'><li>{props.li_4}</li></Link>
      </ul>
    </nav>
  </nav>
  );
}

Navigation.propTypes = {

};

export default Navigation;
