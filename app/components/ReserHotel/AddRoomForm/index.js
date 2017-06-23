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

class AddRoomForm extends React.PureComponent {
  constructor(props){
    super(props)
    this.state ={
      input: []
    };
    this.clickInput = this.clickInput.bind(this)
    this.getClass = this.getClass.bind(this)
  }

  clickInput(e){
    var input = []
    e.currentTarget.value = (e.currentTarget.value < 0) ? 0 : e.currentTarget.value;
    var currentValue = e.currentTarget.value
    for (var i = 1; i <= currentValue; i++) {
      input.push(<InputKids key={i} Menor={i}/>)
    }
    this.setState({
      input:input
    })
  }

  getClass(id){
    var divId=document.getElementById(id)
    divId.parentNode.removeChild(divId)
    console.log(divId);
  }

  render() {

    return (
      <div id={this.props.id}>
        {this.props.line == true ? <Line/> : ''}
        <div className="dad-reserv">
          <div className="child">
            <label htmlFor="">Habitaciones</label>
            <input className="inputs" type="number" min="0" placeholder="10"/>
          </div>
          <div className="child">
            <label htmlFor="">Adultos</label>
            <input className="inputs" type="number" min="0" placeholder="10"/>
          </div>
          <div className="child">
            <label htmlFor="">Niños (0-7)</label>
            <input onChange={this.clickInput} className="inputs" type="number" max="2" placeholder="10"/>
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
