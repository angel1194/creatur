/**
*
* TabEvents
*
*/

import React from 'react';
import styled from 'styled-components';
import FormSearch from '../../FormSearch/';
import FormSearchHotel from '../../ReserHotel/FormSearchHotel/';
import { Link } from 'react-router';
import FormTransport from '../FormTransport';

const Span = styled.span`
  font-size: 25px;
  text-align: center;
`;

class TabEvents extends React.Component {
   constructor(props){
     super(props);
     this.state={
       ubicacion:'hotel',
     }
     this.changeLocation = this.changeLocation.bind(this);
   }

   changeLocation(ubicacion){
     this.setState({
       ubicacion:ubicacion,
     })
   }

   renderForm(){
     if(this.state.ubicacion==='hotel'){
       return(
         <FormSearchHotel input='manzanero' button='manzanero' title='Bienvenido' setLocation={this.props.setLocation} type={this.props.type} saveDataHotel={this.props.saveDataHotel} saveRoomsAdult={this.props.saveRoomsAdult}/>
       )
     }else if(this.state.ubicacion==='car'){
       return(
         <FormSearchHotel input='manzanero' button='manzanero' title='Bienvenido' setLocation={this.props.setLocation} type={this.props.type} saveDataHotel={this.props.saveDataHotel} saveRoomsAdult={this.props.saveRoomsAdult}/>
       )
     }else if (this.state.ubicacion==='transport') {
       return(
         <FormTransport title='Bienvenido' />
       )
     }
   }
   render(){
     const ubicacion= this.state.ubicacion
     return (
       <div>
         <div className='tab'>
           <div className={this.state.ubicacion === 'hotel' ? 'selected' : ''}><Link onClick={()=>{this.changeLocation('hotel')}}>{this.props.hotel}<Span className={this.props.iconHotel}></Span></Link></div>
           <div className={this.state.ubicacion === 'car' ? 'selected' : ''}><Link onClick={()=>{this.changeLocation('car')}}>{this.props.auto}<Span className={this.props.iconTicket}></Span></Link></div>
           <div className={this.state.ubicacion === 'transport' ? 'selected' : ''}><Link onClick={()=>{this.changeLocation('transport')}}>{this.props.transport}<Span className={this.props.iconTransport}></Span></Link></div>
         </div>
         {this.renderForm()}
       </div>
     );
   }
 }
 TabEvents.propTypes = {

 };

 export default TabEvents;
