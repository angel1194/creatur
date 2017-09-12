import styled from 'styled-components';

const ContainerRoom = styled.div`
  width: 100%;
  display:flex;
  flex-wrap:wrap;
`;

const RoomImg = styled.div`
  padding:0px 15px 10px 15px;
  width:33.33%;
  height:245px;
  border-right:2px solid #58ACFA
`;

const DetailsRoom = styled.div`
  width:33.33%;
  display:flex;
  flex-direction:column;
  height:245px;
  border-right:2px solid #58ACFA;
  padding:15px 15px 10px 40px;
`;

const Label = styled.label`
  color:#5e5e5e;
  margin-top:5px;
`;

const LinkA = styled.a`
  color:#87b672 !important;
  text-decoration:underline
  margin-top:15px;
  cursor:pointer;
`;

const ContainerPrice = styled.div`
  width:33.33%;
  height:245px;
  padding:15px 50px;
  display:flex;
  flex-direction:column;
`;

const ContainerButtonGreen = styled.div`
  width:75%;
  margin-bottom:20px;
  background:#87b672;
  margin-left:10px;
  color:white;
  font-family:Montserrat;
  display:flex;
  flex-direction:column;
  align-items:center
  padding:5px 15px;
  border-radius: 6px;
`;

const ButtonGreen = styled.label`
  width:auto;
  border-bottom:1px solid white;
  color:#fff;
`;

const LabelA = styled(Label) `
  margin-top:0px !important
`;

const Img = styled.img `
  border-radius: 6px;
  width: 250px;
  height: 156px;
`;

export {ContainerRoom, RoomImg, DetailsRoom, Label, LinkA, ContainerPrice, ContainerButtonGreen, ButtonGreen, LabelA, Img};
