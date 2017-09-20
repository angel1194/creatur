import React, {Component} from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import H3 from '../../../../ReserHotel/H3';
import Line from '../Line';

const Form = styled.form`
  padding: 20px 10px 30px 10px;

  @media (min-width: 800px){
    max-width: 100%;
  }
`;

class DualRangeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        min: 650,
        max: 1600,
      },
      value1: {
        min: 2,
        max: 4,
      },
    };
  }

  render() {
    return (
      <div>
        <H3>{this.props.TitleStar}</H3>
        <Form>
          <InputRange
          draggableTrack
          maxValue={5}
          minValue={1}
          onChange={value => this.setState({ value1: value })}
          onChangeComplete={value => console.log(value)}
          value={this.state.value1} />
        </Form>
        <Line />
        <H3>{this.props.TitlePrice}</H3>
        <Form>
          <InputRange
            maxValue={1920.00}
            minValue={372.00}
            formatLabel={value => '$'+value}
            value={this.state.values}
            onChange={value => this.setState({ values: value })}
            onChangeComplete={value => console.log(value)} />
        </Form>
      </div>
    );
  }
}

export default DualRangeSlider;
