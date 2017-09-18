import React from 'react';
import styled from 'styled-components';
import AddCheckList from '../../AddCheckList';
import room from './room.jpg';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

class Itemcar extends React.Component {

  submit(){
    confirmAlert({
      title: 'La reservacion se eliminará',
      message: '¿Estás seguro de hacer esto?',
      confirmLabel: 'Aceptar',
      cancelLabel: 'Cancelar',
      onConfirm: ()=>this.props.removeRooms(this.props.elements.idHotel),
      // onCancel: () => alert('Cancel'),
    })
  }

  render() {
    return (
      <div className='main-item'>
        <div className='type-room'>
          <h2>{this.props.item[this.props.elements.idHotel].name}</h2>
          <p>{this.props.elements.description}</p>
        </div>
        <div className="bodyItemShopping">
          <div className='section-item-rigth'>
            <div className='img-item'>
              <img src={this.props.elements.image} alt=""/>

            </div>
          </div>
          <div className='section-item-left'>
            {/* <div className='icon-person'>
              <span className='item-person'><i className='fa fa-male'></i></span>
              <span className='item-person'><i className='fa fa-male'></i></span>
            </div> */}
            <div className='item-check'>
              <p>{this.props.count} noches de estancia</p>
            </div>
            <div className='item-fecha'>
              <span className='icon-fechain'><i className='fa fa-sign-in'></i></span>
              <p>{this.props.checkin}</p>
              <span className='icon-fechaout'><i className='fa fa-sign-out'></i></span>
              <p>{this.props.checkout}</p>
            </div>
            <div className='item-price'>
              <p>${this.props.elements.price} MXN</p>
              <p className='night'>por noches</p>
            </div>
          </div>
        </div>
        <span className='fa fa-trash' onClick={this.submit.bind(this)}></span>
      </div>
    );
  }
}

Itemcar.propTypes = {

};

export default Itemcar;
