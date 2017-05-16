import styled from 'styled-components';


const Wrapper = styled.div`
   
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5px;
    margin-right: 10px;
    

`;

const SmallText = styled.p`

     font-family: Roboto;
     font-size: 11.5px;
     color: #989898;
     

`;

const InputText = styled.input`
     border: 1px solid #eaeff3;
     box-shadow: inset 1px 1px 2px #ccc;
     color: #000;
     width: 136px;
     height: 30px;
     padding: 4px;

     &:focus { 
    outline: none !important;
    border:1px solid #204f9e;
    box-shadow: 0 0 3px #204f9e;
}
`;

const InputNum = styled.input`
     border: 1px solid #eaeff3;
     box-shadow: inset 1px 1px 2px #ccc;
     color: #000;
     width: 50px;
     height: 30px;
     padding: 4px;

     &:focus { 
    outline: none !important;
    border:1px solid #204f9e;
    box-shadow: 0 0 3px #204f9e;
}
`;

export { Wrapper, SmallText, InputText, InputNum };

