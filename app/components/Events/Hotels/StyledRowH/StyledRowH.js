import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: flex-start;
  margin-bottom: 20px;

  /* Responsive */
  @media only screen and (max-width: 799px) and (min-width: 412px){
    overflow-wrap: break-word;
    column-count: 2;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 180px;
  border: 2px solid #eaeff3;
  border-radius: 6px;
  animation: fadein 2s;
  -moz-animation: fadein 2s;
  -webkit-animation: fadein 2s;
  /* Responsive */
  @media only screen and (max-width: 500px) and (min-width: 412px){
   overflow-wrap: break-word;
   display: list-item;
   display: inline-table;
    margin: 0 auto;
    width: 390px;
    margin-left: -10px;

  }

  @keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }StyledRowH
    to {
        opacity:1;
    }
}
`;

const WrapperTrans = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:  space-between ;
  margin: 0;
  padding: 0;
  width: 100%;
  border-left: 2px solid #eaeff3;
  border-right: 2px solid #eaeff3;
  border-bottom: 2px solid #eaeff3;
  border-radius: 0 0 6px 6px;

`;

const Title = styled.p`
  font-family: Roboto;
  font-size: 21px;
  color: #2b5bac;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;


  @media only screen and (max-width: 500px) and (min-width: 412px){
  font-size: 15px;
  white-space: pre-wrap;
  text-align: center;
  }
`;

const Row = styled.div`
display: flex;
 flex-direction: row ;
 align-items: flex-start;
 @media only screen and (max-width: 500px) and (min-width: 412px){
  overflow-wrap: break-word;
 }
`;

const Img = styled.img`
  width:200px;
  height:158px;
  border-radius: 6px !important;
  display:block;
  margin:auto;

 /* Responsive */
 @media only screen and (max-width: 500px) and (min-width: 412px){
   display: run-in;
 }
`;

export { Column, Wrapper, WrapperTrans, Title, Row, Img };
