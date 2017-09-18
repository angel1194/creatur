import React, {PropTypes} from 'react';
import styled from 'styled-components';

class InputKids extends React.Component {

  render (){
    return (
      <div className="section-dad">
        <div>
          <div className="section-child">
            <label htmlFor={this.props.Menor+'Menor'+this.props.id}>Menor {this.props.Menor}</label>
            <select className="inputs" onChange={(e)=>this.props.inputChild(this.props.object,this.props.Menor,e)} id={this.props.Menor+'Menor'+this.props.id}>
              <option>0</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
            </select>
            {/* <input className="inputs" type="number" onChange={(e)=>this.props.inputChild(this.props.object,this.props.Menor,e)} id={this.props.Menor+'Menor'+this.props.id} min="0" max="17" placeholder="0"/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default InputKids;
