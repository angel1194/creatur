import React,{Component} from 'react';
import { browserHistory } from 'react-router';
import NavEvent from '../../../components/Events/NavEvent'
import AddHotels from '../../../components/Events/AddHotels'
import styled from 'styled-components'
import firebase from '../Firebase'

const Container = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
`;

const FormContainer = styled.div`
  width:85%;
`;

class AdminHotels extends Component{
  constructor(){
    super()
    this.state= {
      UI:'hotel'
    }
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(firebaseUser=>{
      if(!firebaseUser){
        browserHistory.push('/manzanero/admin')
      }
    })
  }

  render(){
    return(
      <Container>
        <NavEvent />
        <FormContainer>
          <AddHotels/>
        </FormContainer>
      </Container>
    );
  }
}

export default AdminHotels;
