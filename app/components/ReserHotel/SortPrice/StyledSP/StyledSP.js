import styled from 'styled-components';



const Wrapper = styled.div`
  display: flex;
  flex:1 1 20%;
  order:3;
  margin: 4px;
  min-width: 234px;
  flex-direction: row;
  align-self: flex-end;
  align-items: flex-end;

`;

const TextBold = styled.p`

     font-family: Roboto;
     font-size: 11.5px;
     color: #989898;
     

`;

const InputText = styled.input`
     border: 1px solid #eaeff3;
     box-shadow: inset 1px 1px 2px #ccc;
     color: #204f9e;
     width: 136px;
     height: 30px;
     padding: 4px;
     margin-left:4px;

     &:focus { 
    outline: none !important;
    border:1px solid #204f9e;
    box-shadow: 0 0 3px #204f9e;
}
`;


export  {Wrapper, TextBold, InputText};

