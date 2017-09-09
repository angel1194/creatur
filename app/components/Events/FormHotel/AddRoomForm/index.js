import React from 'react';
import {Line, AddInputs} from '.././style';
import InputKids from '../InputKids';

class AddRoomForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      input: []
    };
  this.addAgeInput = this.addAgeInput.bind(this)
  this.inputChild=this.inputChild.bind(this)
  }

  addAgeInput(e){
    let input = []
    let value = e.target.value
    for (let i = 1; i <= value; i++) {
      input.push(<InputKids key={i} Menor={i} id={this.props.count} inputChild={this.inputChild} object={this.props.object}/>)
    }
    this.setState({
      input:input
    })
  }

  inputChild(obj,count,e){
    if (this.props.object === obj) {
      this.props.input['Age'+count] = e.target.value
      return
    }
  }

  render() {
    return (
      <div>
        {this.props.count >= 1 ? <Line/> : ''}
        <div className="dad-reservHotel">
          <div className="childHotel">
            <label htmlFor={'Adulto'+this.props.count}>Adultos (18+)</label>
            {/* <input className="inputs" id={'Adulto'+this.props.count} onChange={(e)=>this.props.inputValueChange(this.props.object,e)} type="number" min="0" placeholder="0" name='adult'/> */}
            <select className="inputs" id={'Adulto'+this.props.count} onChange={(e)=>this.props.inputValueChange(this.props.object,e)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
            </select>
          </div>
          <div className="childHotel">
            <label htmlFor={'Cuna'+this.props.count}>Cunas</label>
            {/* <input className="inputs" id={'Cuna'+this.props.count} onChange={(e)=>this.props.inputValueChange(this.props.object,e)} type="number" min="0" placeholder="0" name='baby'/> */}
            <select className="inputs" id={'Cuna'+this.props.count} onChange={(e)=>this.props.inputValueChange(this.props.object,e)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className="childHotel">
            <label htmlFor={'Ninos'+this.props.count}>Niños (0-17)</label>
            {/* <input className="inputs" id={'Ninos'+this.props.count} onChange={this.addAgeInput} type="number" min="0" max="2" placeholder="0" name={'Ninos'+this.props.count}/> */}
            <select className="inputs" id={'Ninos'+this.props.count} onChange={this.addAgeInput}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
        <div className="edadCLIENTES">
          <p className='childYears'>{this.state.input == 0 ? '' : 'Edad de los menores'}</p>
        </div>
        <AddInputs>
          {this.state.input.map((element) => element)}
        </AddInputs>
        <div className="removeHotel">
          {this.props.count >= 1 ? <i className="fa fa-minus-circle fa-lg" aria-hidden="true"></i> : ''}
          <a onClick={()=> this.props.delete(this.props.object)}>{this.props.count >= 1 ? 'Eliminar' : ''}</a>
        </div>
      </div>
    );
  }
}

export default AddRoomForm;
