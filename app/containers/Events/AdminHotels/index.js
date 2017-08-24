import React,{Component} from 'react';
import { browserHistory } from 'react-router';
import NavEvent from '../../../components/Events/NavEvent'
import styled from 'styled-components'
import firebase from '../Firebase'

const Container = styled.div`
  width:100%;
  display:flex;

`;

class AdminHotels extends Component{
  constructor(){
    super()
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
      <div>
        <Container>
          <NavEvent/>
        </Container>
      </div>
    );
  }
}

export default AdminHotels;
