import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f2f2f2;
  border-radius: 6px;
  height: 25px;
  margin-bottom: 10px;
  padding-right: 20px;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Li = styled.li`
  list-style: none;
  margin: -10px 0px 0px 5px;
  color : #2b5bac;;
  font-family: Roboto;
  cursor: pointer;
`
const Car = styled.p`
list-style: none;
margin: 5px 0px 0px 0px;
color : #2b5bac;;
font-family: Roboto;
cursor: pointer;
`

const Count = styled.div`
  background-color: #7db464;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  margin: -.6em 0em 0em 78.9em;
  padding: 0px 5px 0px 5px;
`;

export {Ul, Li, Div, Car, Count}
