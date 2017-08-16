/**
*
* MainEvents
*
*/

import React from 'react';
import Tab from '../../Tab';
import {Container, Grid, } from 'semantic-ui-react'
import Hotels from '../Hotels';
import Rooms from '../Rooms';
import MainEvents from '../MainEvents';
// import styled from 'styled-components';

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainEvents/>
      </div>
    );
  }
}

export default Home;
