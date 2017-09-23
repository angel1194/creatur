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
  }

  render() {

    return (
      <div>
        <H3>{this.props.TitleStar}</H3>
        <Form>
          <InputRange
            maxValue={5}
            minValue={1}
            onChange={value => this.props.setFilterValue('star',value)}
            value={this.props.star}
          />
        </Form>
        <Line />
        <H3>{this.props.TitlePrice}</H3>
        <Form>
          <InputRange
            maxValue={3000}
            minValue={300}
            formatLabel={value => '$'+value}
            value={this.props.price}
            onChange={value => this.props.setFilterValue('price',value)}
          />
        </Form>
      </div>
    );
  }
}

export default DualRangeSlider;
