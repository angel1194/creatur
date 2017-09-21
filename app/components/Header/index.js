import React from 'react';
// import styled from 'styled-components';
import {Container} from 'semantic-ui-react'
import Navigation from '../Navigation'
import { Link } from 'react-router'
import InicialState from '../Events/state';


class Header extends React.Component {
  constructor(){
    super();
    this.state = InicialState
  }

  render(){
    const {car} = this.state
    let count = Object.keys(car.items)

    return(
      <header className="header">
        <Container>
          <Navigation li_1={this.props.li_1} li_2={this.props.li_2} li_3={this.props.li_3} li_4={this.props.li_4} toLink={this.props.toLink}/>
        </Container>
      </header>
    )
  }
}

Header.propTypes = {

};

export default Header;
