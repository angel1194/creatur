import React, {PropTypes} from 'react';
import styled from 'styled-components';

class InputKids extends React.Component {

  render (){
    return (
      <div className="section-dad">
        <div>
          <div className="section-child">
            <label htmlFor={this.props.Menor+'Menor'+this.props.id}>Menor {this.props.Menor}</label>
            <input className="inputs" type="number" onChange={(e)=>this.props.inputChild(this.props.object,this.props.Menor,e)} id={this.props.Menor+'Menor'+this.props.id} min="0" max="17" placeholder="0"/>
          </div>
        </div>
      </div>
    );
  }
}

export default InputKids;
