import styled from 'styled-components';

const Column = styled.div`
   display: flex;
   flex-direction: column ;
   align-items: flex-start;
   margin-top: 10px;
`;

const Wrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content:  space-between ;
   margin: 0;
   padding: 0;
   width: 100%;
   height: 160px;
   border: 1px solid red;
  
`;

const Title = styled.p`

     font-family: Roboto;
     font-size: 21px;
     color: #2b5bac;
     font-weight: bold;
     white-space: nowrap;
     overflow: hidden;
      text-overflow: ellipsis;

`;


const Row = styled.div`
   display: flex;
   flex-direction: row ;
   align-items: flex-start;
   
  
`;

export { Column, Wrapper, Title, Row };