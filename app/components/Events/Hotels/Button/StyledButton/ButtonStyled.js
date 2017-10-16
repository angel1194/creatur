import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const ButtonStyled = styled.button`
  width: 145px;
  height: 34px;
  background-color:#2b5bac;
  margin-top: 4px;
  align-self: flex-start;
  color: #ffffff;
  border-radius: 6px !important;
  box-shadow: 1px 1px 2px #444;

  &:hover{
    background-color:#2b5bbd;
    box-shadow: 1px 1px 2px #000;
  }
  /* Responsive*/
  @media only screen and (max-width: 500px) and (min-width: 412px){
    position: relative;
    top: -95px;
    right: -200px;
  }
`;

const Title = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  margin-left: 15%;
`;

const Line = styled.hr`
  border-top: 1px solid #719fec;
  border-bottom: 0px solid #719fec;
  border-left:1px solid #719fec;
  border-right:1px solid #719fec;
  color:#719fec;
  margin:0;
  margin-left:10%;
  margin-right: 10%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row ;
  align-items: center;
  margin: 0;
`;

const Arrow = styled(FontAwesome)`
  top:-2px !important;
  right: 4px !important;
  position: relative !important;
`;


export { ButtonStyled, Title, Arrow, Line, Wrapper };
