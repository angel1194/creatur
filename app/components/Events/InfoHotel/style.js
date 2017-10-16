import styled from 'styled-components';

const ContainerHotel = styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-wrap:wrap;
  border:1px solid #eaeaea;
  margin-bottom:20px;
  border-radius: 6px;
`;

const Img = styled.img`
  width: 370px;
  height: 285px;
  border-radius: 11px;
  /*  Responsive*/
  @media only screen and (max-width: 982px) and (min-width: 412px){
    margin:10px auto;
  	display:block;
    border-radius: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  /*  Responsive */
@media only screen and (max-width: 982px) and (min-width: 412px){
  flex-direction: column;
  text-align: justify;
}

`;




export {ContainerHotel, Img, Row};
