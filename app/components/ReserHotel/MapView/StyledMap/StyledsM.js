
import styled, { css } from 'styled-components';
import IcnDefault from '../MapDefault.jpg';

const Wrapper = styled.div`

  flex:1 1 20%;
  order:1;
  border: 2px solid #eaeff3;
  margin: 4px;
  min-width: 234px;

`;

const Img = styled.div`
  width:232px;
  height:116px
  background-image:url(${IcnDefault});
  background-size:100% auto;
`;

const ButtonIcon = styled.button`
    position: relative;
    background-color: #2b5bac;
    margin:0;
    width: 112px;
    height: 30px;
    top: 86px;
    left: 120px;
    display: flex;
    justify-content: center;

`;

const Text = styled.p`
     text-align : center;
     color : #ffffff;
     font-family : 'Montserrat';
     font-size: 15px;
     margin:0;
     top: 3px;
     position:relative;
    
`;



export { Wrapper, Img, ButtonIcon, Text };

