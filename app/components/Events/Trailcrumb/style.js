import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-radius: 6px;
  height: 35px;
  width: 100%;
  margin-top: 40px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Li = styled.li`
  list-style: none;
  color : #ccc;
  font-family: Roboto;
  cursor: pointer;
  height: 40px;
  padding: 12px 30px 15px 30px;
  &:hover{
    color : #fff;
    background: rgb(125, 180, 100);;
    border-radius: 3px;

  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: row;
`

export {Ul, Li, Div, SubMenu}
