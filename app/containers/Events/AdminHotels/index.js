import React,{Component} from 'react';
import { browserHistory } from 'react-router';
import NavEvent from '../../../components/Events/NavEvent'
import AddHotels from '../../../components/Events/AddHotels'
import AddTransport from '../../../components/Events/AddTransport'
import AddTicket from '../../../components/Events/AddTicket'
import styled from 'styled-components'
import firebase from '../Firebase'
import IconLabel from '../../../components/Events/IconLabel';
import RowAdmin from '../../../components/Events/RowAdmin';
import TableAdmin from '../../../components/Events/TableAdmin';
import FormTableAdmin from '../../../components/Events/FormTableAdmin';
import {Link} from 'react-router';

const Logo= styled.img`
  width:100%;
`;

/*Componentes del body */
const Body = styled.div`
  width:15%;
  height:220px;
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
  padding-left:30px
`;

const FormContainer = styled.div`
  width:100%;
`;

const ContainerTable = styled.div`
  margin-top: 10px;
  width:90%;
  height: auto;
  background:#E6E6E6;
  padding:25px;
  border-radius:6px;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  padding-top: 19px;
  `;

class AdminHotels extends Component{
  constructor(props){
    super(props)
    this.state= {
      ui:'hotel',
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

  componentDidMount(){
  let database = firebase.database().ref().child('hotels')
  database.on('value',snap=>{
    this.setState({
      hotels:snap.val()
    })
  })

  }

  changeLocation(ubicacion){
    this.setState({
      ui:ubicacion
    })
  }


   renderForm(){

     const database= this.state.hotels

     if(this.state.ui==='hotel' ){
       return(
         <div>
         <AddHotels/>
         <ContainerTable>
           <TableAdmin />

          {Object.keys(database).map((data,i)=>
          <RowAdmin
            key={i}
            name={database[data].name}
            address={database[data].address}
            image={database[data].image}
            stars={database[data].star}
            description={database[data].description}
            cancellation={database[data].cancellation}
           />
          ) }
        </ContainerTable>
       </div>
       )
     }else if (this.state.ui=='transporte') {
       return(
         <div>
           <AddTransport/>
           <ContainerTable>
              <FormTableAdmin
                row='Imagen'
                rowtwo='Precio'
                rowthree='Asiento'
                rowfour='Tipo'
              />
           </ContainerTable>
         </div>
       )
     }else if (this.state.ui=='ticket') {
       return(
         <div>
           <AddTicket/>
           <ContainerTable>
              <FormTableAdmin
                row='Fecha'
                rowtwo='Key'
                rowthree='Precio'
                rowfour='Sección'
              />
           </ContainerTable>
         </div>
       )
     }
   }
  render(){
    const ubicacion= this.state.ui
    return(
      <Container>
        <Body>
          <Link style={linkStyle} onClick={()=>{this.changeLocation('hotel')}}><IconLabel Text='Hotel' Icon='building'/></Link>
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
