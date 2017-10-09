import React,{Component} from 'react';
import HomeManzanero from '../../../components/Events/Home';
// import Header from '../../../components/Header';
import firebase from '../Firebase';

class Home extends React.Component {

  componentDidMount(){
    let ref = firebase.database().ref().child('temp')
    ref.on('value', data => {
      this.setState({
        temp:data.val()
      })
    })
  }

  render() {
    return (
      <div>
        {/* <Header li_2="Servicios" li_3="Sobre Nosotros" li_4="Mi reserva" toLink="/manzanero"/> */}
        <HomeManzanero/>
      </div>
    );
  }
}

export default Home;
