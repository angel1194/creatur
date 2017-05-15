/**
*
* TermConditions
*
*/

import React from 'react';
import styled from 'styled-components';
import H3 from '../ReserHotel/H3'

const ContainerTerm = styled.div`
  width:65%;
  background-color:#FFF;
  height:auto;
  padding: 20px 10px 20px 30px;
  border-left:1px solid #eaeaea;
`;

const LabelTerm = styled.label`
  color:#5e5e5e;
`;

const Title=styled(H3)`
  margin-top:5px;
  margin-bottom:5px;
`;

function TermConditions() {
  return (
    <ContainerTerm>
      <Title>Terminos y Condiciones</Title>
      <LabelTerm>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis tortor id mauris accumsan laoreet. Nulla facilisi. In vestibulum est magna, et laoreet velit tincidunt pulvinar. Sed ultricies sit amet risus ac tincidunt. Suspendisse scelerisque maximus viverra. Proin semper diam a turpis venenatis condimentum. Fusce molestie porttitor diam pellentesque consequat. In magna nisl, vehicula quis condimentum vitae, maximus vel odio. Morbi augue quam, vulputate non ligula quis, ornare congue quam.
      </LabelTerm>
      <Title>Politicas de cancelacion</Title>
        <LabelTerm>
          Lorem ipsum dolor sit amet. In vestibulum est magna, et laoreet velit tincidunt pulvinar. Sed ultricies sit amet risus ac tincidunt. Suspendisse scelerisque maximus viverra. Proin semper diam a turpis venenatis condimentum. Fusce molestie porttitor diam pellentesque consequat. In magna nisl, ornare congue quam.
        </LabelTerm>
    </ContainerTerm>
  );
}

TermConditions.propTypes = {

};

export default TermConditions;
