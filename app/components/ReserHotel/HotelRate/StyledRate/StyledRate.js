import styled from 'styled-components';
import H3 from '../../../../components/ReserHotel/H3';


const Column = styled.div`
   display: flex;
   flex-direction: column ;
   align-items: flex-end;
   margin: 0;
   border: 2px solid #eaeff3;
   border-radius: 6px;
   margin-bottom:20px;

`;


const Row = styled.div`
  display: flex;
   flex-direction: row;
   width:100%;
  align-items: flex-end;
`;


const ConLabelPrice = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column ;
    align-items: flex-start;
    margin: 0;
    padding: 15px;
`;

const SubTitle = styled(H3) `
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export { Column, Row, ConLabelPrice, SubTitle };