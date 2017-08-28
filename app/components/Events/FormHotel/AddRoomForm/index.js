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
  }

  addAgeInput(e){
    let input = []
    e.currentTarget.value = (e.currentTarget.value < 0) ? 0 : e.currentTarget.value;
    let currentValue = e.currentTarget.value
    for (let i = 1; i <= currentValue; i++) {
      input.push(<InputKids key={i} Menor={i} name={this.props.count}/>)
    }
    this.setState({
      input:input
    })
  }

  render() {
    return (
      <div>
        {this.props.count >= 1 ? <Line/> : ''}
        <div className="dad-reservHotel">
          <div className="childHotel">
            <label htmlFor={'Adulto'+this.props.count}>Adultos</label>
            <input className="inputs" id={'Adulto'+this.props.count} type="number" min="0" placeholder="0" name={'Adulto'+this.props.count}/>
          </div>
          <div className="childHotel">
            <label htmlFor={'Cuna'+this.props.count}>Cunas</label>
            <input className="inputs" id={'Cuna'+this.props.count} type="number" min="0" placeholder="0" name={'Cuna'+this.props.count}/>
          </div>
          <div className="childHotel">
            <label htmlFor={'Ninos'+this.props.count}>Niños</label>
            <input className="inputs" id={'Ninos'+this.props.count} onChange={this.addAgeInput} type="number" max="2" placeholder="0" name={'Ninos'+this.props.count}/>
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
