import React,{Component} from 'react';
import HomeManzanero from '../../../components/Events/Home';
// import Header from '../../../components/Header';

class Home extends React.Component {

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
