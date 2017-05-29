/**
*
* BarOffers
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #FF0000;
  margin: 10px 0px 0px 0px;
  padding: 2px 20px 2px 20px;
`;

const P = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  margin-left: 100px;
`;

function BarOffers(props) {
  return (
    <div>
      <Div>
        <P><i className="fa fa-clock-o" aria-hidden="true"></i> {props.hours}</P> <P>{props.text}</P>
      </Div>
    </div>
  );
}

BarOffers.propTypes = {
  hours:PropTypes.string,
  text:PropTypes.string
};

export default BarOffers;
