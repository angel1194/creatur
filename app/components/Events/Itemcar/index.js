/**
*
* Itemcar
*
*/

import React from 'react';
import styled from 'styled-components';
import AddCheckList from '../../AddCheckList';
import room from './room.jpg';
class Itemcar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='main-item'>
        <div className='section-item-left'>
          <div className='type-room'>
            <p>1 Habitacion doble basic</p>
          </div>
          <div className='icon-person'>
            <span className='item-person'><i className='fa fa-male'></i></span>
            <span className='item-person'><i className='fa fa-male'></i></span>

          </div>
          <div className='item-fecha'>
            <span className='icon-fechain'><i className='fa fa-sign-in'></i></span>
            <p>10/02/2017</p>
            <span className='icon-fechaout'><i className='fa fa-sign-out'></i></span>
            <p>20/02/2017</p>
          </div>
          <div className='item-check'>
            <AddCheckList id={this.props.id} text='confirmacion Inmediata'/>
          </div>
          <div className='item-price'>
            <p> USD 76,17 </p>
          </div>
        </div>
        <div className='section-item-rigth'>
          <div className='img-item'>
            <img src={room} alt=""/>
            <span className='fa fa-trash'></span>
          </div>
        </div>

      </div>
    );
  }
}

Itemcar.propTypes = {

};

export default Itemcar;
