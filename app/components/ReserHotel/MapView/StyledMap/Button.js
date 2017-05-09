import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';


const ButtonStyled = styled.button`
  width: 155px;
  height: 45px;
  background-color:#2b5bac;
  margin-top: 4px;
  align-self: flex-start;
  color: #ffffff;

`;

const Title = styled.p`
     font-family: Montserrat;
     font-size: 18px;
     margin-left: 15%; 
`;

const Line = styled.hr`
    border-top: 1px solid #719fec;
    border-bottom: 1px solid #719fec;
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

          top:-4px !important;
          position: relative !important;


`;


export { ButtonStyled, Title, Arrow, Line, Wrapper };