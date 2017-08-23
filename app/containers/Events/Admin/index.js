import React,{Component} from 'react';
import { browserHistory } from 'react-router';
import styled from 'styled-components'
import firebase from '../Firebase'
import InputIcon from '../../../components/InputIcon'

const Container =styled.div`
  width:70%;
  margin:0 auto;
  display:flex;
  flex-direction:row;
  justify-content:center
`;

const BoxLogIn= styled.div`
  width:350px;
  height:300px;
  box-shadow:-1px -1px 15px black;
  border-radius:6px;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  padding:20px;
`;

const Title= styled.span`
  font-size:20px;
  font-family:Montserrat;
`;

const Button =styled.button`
  width:100px;
  height:50px;
  background-color:#2b5bac;
  box-shadow:1px 1px 8px #000;
  color:white;
`;

const Form= styled.form`
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap
  justify-content:center;
`;

// const logIn = firebase.auth()

class Admin extends Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        // browserHistory.push('/manzanero')
        console.log('log');
      }
    })
  }

  submitForm(e){
    e.preventDefault()
    let email = e.target.elements['email'].value;
    let password = e.target.elements['password'].value;
    const auth=firebase.auth()

    const promise = auth.signInWithEmailAndPassword(email,password)
    promise.catch(e => console.log(e.message))

    firebase.auth().onAuthStateChanged(firebaseUser=>{
      if(firebaseUser){
        console.log(firebaseUser);
      }else{
        console.log('No se pudo logear');
      }
    })

  }
  render() {
    return (
      <Container>
        <BoxLogIn>
          <Form onSubmit={this.submitForm.bind(this)}>
            <Title>Iniciar Sesion</Title>
            <InputIcon inputName='email' inputId='email'  name='user-circle' type='email' placeholder='Ingrese correo....'/>
            <InputIcon inputName='password' inputId='password'  name='lock' type='password' placeholder='XXX....'/>
            <Button>LogIn</Button>
          </Form>
        </BoxLogIn>
      </Container>
    );
  }
}

export default Admin;
