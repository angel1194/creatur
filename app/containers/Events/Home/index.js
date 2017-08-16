/*
 *
 * Events
 *
 */

import React,{Component} from 'react';
import MainEvents from '../../../components/Events/MainEvents';

class Home extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MainEvents/>
      </div>
    );
  }
}

export default Home;
