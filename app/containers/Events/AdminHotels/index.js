import React,{Component} from 'react';
import { browserHistory } from 'react-router';
import NavEvent from '../../../components/Events/NavEvent'
import AddHotels from '../../../components/Events/AddHotels'
import AddTransport from '../../../components/Events/AddTransport'
import AddTicket from '../../../components/Events/AddTicket'
import styled from 'styled-components'
import firebase from '../Firebase'
import IconLabel from '../../../components/Events/IconLabel';
import {Link} from 'react-router';

const Logo= styled.img`
  width:100%;
`;

/*Componentes del body */
const Body = styled.div`
  width:25%;
  height:500px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const linkStyle ={
  width:'90%'
}

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
`;
  
const FormContainer = styled.div`
  width:100%;
`;

class AdminHotels extends Component{
  constructor(props){
    super(props)
    this.state= {
      ui:'hotel'
    }
    this.changeLocation=this.changeLocation.bind(this);
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(firebaseUser=>{
      if(!firebaseUser){
        browserHistory.push('/manzanero/admin')
      }
    })
  }

  changeLocation(ubicacion){
    this.setState({
      ui:ubicacion
    })
  }

   renderForm(){
     if(this.state.ui==='hotel'){
       return(
        <AddHotels/>
       )
     }else if (this.state.ui=='transporte') {
       return(
        <AddTransport/>
       )
     }else if (this.state.ui=='ticket') {
       return(
         <AddTicket/>
       )
     }
   }
  render(){
    const ubicacion= this.state.ui
    return(
      <Container>
        <Body>
          <Link style={linkStyle} onClick={()=>{this.changeLocation('hotel')}}><IconLabel Text='Hotel' Icon='building'  /></Link>
          <Link style={linkStyle} onClick={()=>{this.changeLocation('transporte')}}><IconLabel Text='Transporte' Icon='car' /></Link>
          <Link style={linkStyle} onClick={()=>{this.changeLocation('ticket')}}><IconLabel Text='Tickets' Icon='ticket'  /></Link>
          <Link style={linkStyle} to='manzanero/admin'><IconLabel Text='Sales' Icon='history' /></Link>
        </Body>
        <Container>
        <FormContainer>
        {this.renderForm()}
        </FormContainer>
       </Container>
      </Container>
    );
  }
}

export default AdminHotels;
