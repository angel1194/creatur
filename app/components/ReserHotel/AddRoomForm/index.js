/**
*
* AddRoomForm
*
*/

import React from 'react';
import styled from 'styled-components';
import InputKids from '../../InputKids';

const Line = styled.div`
  background-color: #70a0ec;
  height: 3px;
  width: 95%;
  margin-bottom: 5px;
`;

const AddInputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 11px;
`;

class AddRoomForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      input: [],
      room:{},
    };
    this.clickInput = this.clickInput.bind(this)
    this.OnChange = this.OnChange.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount(){
    this.state.room[this.props.idFor]={}
  }
  clickInput(e){
    var input = []
    e.currentTarget.value = (e.currentTarget.value < 0) ? 0 : e.currentTarget.value;
    var currentValue = e.currentTarget.value
    for (var i = 1; i <= currentValue; i++) {
      input.push(<InputKids key={i} Menor={i} name={this.props.idFor}/>)
    }
    this.setState({
      input:input
    })
  }

  OnChange(e){

  }
  input(val, room){
    var state = this.state
    state.room[room].totalRooms = val
    this.setState(state)
  }

  render() {
    return (
      <div>
        {this.props.line == true ? <Line/> : ''}
        <div className="dad-reserv">
          <div className="child">
            <label htmlFor={this.props.idFor}>Habitaciones</label>
            <input id={this.props.idFor} onChange={(e)=> this.input(e.target.value, this.props.idFor)} className="inputs" type="number" min="0" placeholder="0" name={`Hotel${this.props.idFor}`}/>
          </div>
          <div className="child">
            <label htmlFor={this.props.idFor + 'A'}>Adultos</label>
            <input id={this.props.idFor + 'A'} onChange={this.OnChange} className="inputs" type="number" min="0" placeholder="0" name={`adultHotel${this.props.idFor}`}/>
          </div>
          <div className="child">
            <label htmlFor={this.props.idFor + 'n'}>Niños (0-7)</label>
            <input id={this.props.idFor + 'n'} onChange={this.clickInput} className="inputs" type="number" max="2" placeholder="0" name={`childHotel${this.props.idFor}`}/>
          </div>
        </div>
        <div className="edad">
          <p>{this.state.input == 0 ? '' : 'Edad de los menores'}</p>
        </div>
        <AddInputs>
          {this.state.input.map(element => element)}
        </AddInputs>
        <div className="remove">
          {this.props.remove == true ? <i className="fa fa-minus-circle fa-lg" aria-hidden="true"></i> : ''}
          <a onClick={()=> this.props.res()}>{this.props.remove == true ? 'Eliminar' : ''}</a>
        </div>
      </div>
    );
  }
}

AddRoomForm.propTypes = {

};

export default AddRoomForm;
