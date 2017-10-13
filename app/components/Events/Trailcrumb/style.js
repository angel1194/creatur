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
  @media only screen and (max-width: 873px) and (min-width: 564px) {
    display: none;
    margin: 40px -150px 20px 0px;
    z-index: 100;
  }
  @media only screen and (max-width: 563px) and (min-width: 220px) {
    display: none;
    margin: 40px -90px 10px -40px;
    width: 200px;
    z-index: 100;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 873px) and (min-width: 564px) {
    background: #fff;
    box-shadow: 2px 2px 2px #ccc;
    height: 160px;
    width: 100%;
    margin: 40px 0px 0px 20px !important;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 563px) and (min-width: 220px) {
    background: #fff;
    height: 160px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 40px 20px 0px 20px !important;
    padding-left: 0px;
  }
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
    background: rgb(125, 180, 100);
    border-radius: 3px;
  }
  @media only screen and (max-width: 873px) and (min-width: 220px) {
    border-top: 1px solid black;
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 873px) and (min-width: 220px) {
    flex-direction: column;
  }
`;

export {Ul, Li, Div, SubMenu}
