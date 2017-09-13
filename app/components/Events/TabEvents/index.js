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
import FormHotel from '../FormHotel';

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
     this.props.changesLocation(ubicacion)
   }

   renderForm(){
     if(this.state.ubicacion==='hotel'){
       return(
         <FormHotel title='Bienvenido' location={this.props.location} setHotels={this.props.setHotels}/>
       )
     }else if (this.state.ubicacion==='transport') {
       return(
         <FormTransport title='Bienvenido' addTransport={this.props.addTransport}/>
       )

     }
   }
   render(){
     const ubicacion= this.state.ubicacion
     return (
       <div>
         <div className='tab'>
           <div className={this.state.ubicacion === 'hotel' ? 'selected' : ''}><Link onClick={()=>{this.changeLocation('hotel')}}>{this.props.hotel}<Span className={this.props.iconHotel}></Span></Link></div>
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
