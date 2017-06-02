import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';


const Wrapper = styled.div`
  display: flex;
  flex:1 1 60%;
  order:2;
  min-width: 631px;
  flex-direction: column;
  align-self: flex-end;  
`;

const Row = styled.div`
  display: flex;
  flex-direction: row ;
  align-items: center;

`;

const SpaceBetwee = styled(Row) `
      justify-content: space-between;
`;


const LabelText = styled.label`
  font-family:Montserrat;
  font-size: 13.33 px;
  font-weight: 500;
  font-style: normal;
`;

const InputText = styled.input`
     border: 1px solid #eaeff3;
     box-shadow: inset 1px 1px 2px #ccc;
     color: #204f9e;
     width: 136px;
     height: 30px;
     padding: 4px;
     margin-left:4px;
     border-radius:6px;

     &:focus { 
    outline: none !important;
    border:1px solid #204f9e;
    box-shadow: 0 0 3px #204f9e;
}
`;


export { Wrapper, Row, SpaceBetwee, LabelText, InputText };

