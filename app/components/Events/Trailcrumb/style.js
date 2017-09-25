import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f2f2f2;
  border-radius: 6px;
  height: 35px;
  margin-bottom: 10px;
  padding-right: 20px;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Li = styled.li`
  list-style: none;
  margin: 7px 0px 0px 5px;
  color : #2b5bac;;
  font-family: Roboto;
  cursor: pointer;
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: row;
`

export {Ul, Li, Div, SubMenu}
