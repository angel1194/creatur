import React,{Component} from 'react';
import { browserHistory } from 'react-router';
import styled from 'styled-components'
import firebaseApp from '../Firebase'


const Container =styled.div`
  width:70%;
  margin:0 auto;
`;

class Admin extends Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount(){
    let database=firebaseApp.database().ref();
    database.on('value', (snap) => {
        console.log(snap.val());
      })
    // firebaseApp.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     console.log(user);
    //     browserHistory.push('/manzanero/');
    //   }
    // });
  }


  logIn(){
    var provider = new firebaseApp.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log(result);
    })
  }


  render() {
    return (
      <Container>
        <button onClick={this.logIn.bind(this)}>
          Login with Google
        </button>
      </Container>
    );
  }
}

export default Admin;
