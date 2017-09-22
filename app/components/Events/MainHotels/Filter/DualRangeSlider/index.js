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
      star: {
        min: 650,
        max: 1600,
      },
      value1: {
        min: 1,
        max: 5,
      },
    };
  }

  render() {
    return (
      <div>
        <H3>{this.props.TitleStar}</H3>
        <Form>
          <InputRange
            maxValue={5}
            minValue={1}
            onChange={value => this.setState({ value1: value })}
            onChangeComplete={value => this.props.starFilter(value)}
            value={this.state.value1}
          />
        </Form>
        <Line />
        <H3>{this.props.TitlePrice}</H3>
        <Form>
          <InputRange
            maxValue={1920.00}
            minValue={372.00}
            formatLabel={value => '$'+value}
            value={this.state.star}
            onChange={value => this.setState({ star: value })}
            onChangeComplete={value => this.props.priceFilter(value)} />
        </Form>
      </div>
    );
  }
}

export default DualRangeSlider;
