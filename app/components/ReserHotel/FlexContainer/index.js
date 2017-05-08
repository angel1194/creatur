/**
*
* FlexContainer
*
*/


import styled from 'styled-components';



const FlexContainer = styled.ul`

  padding: 0;
  margin: 0;
  list-style: none;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  width: auto;
  height : 40px;
`;


export default FlexContainer;
