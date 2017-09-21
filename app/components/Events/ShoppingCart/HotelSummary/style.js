import styled from 'styled-components';
import H3 from '../../../ReserHotel/H3'

const Container = styled.div`
  width:23%;
  max-height:600px;
  border:1px solid #eaeff3;
  margin-bottom: 30px;
`;

const Header=styled.div`
  height:55px;
  background-color:#2b5bac;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:6px 6px 0px 0px;
`;

const Title=styled.label`
  font-family:Montserrat;
  font-size:18px;
  color:white;
`;

const Line = styled.div`
  width:80%;
  height:1px;
  border:1px solid #5882FA;
  margin-top:5px;
`;

const Body = styled.div`
  width:100%;
  padding:10px 20px 0px 20px;
  display:flex;
  flex-direction:column;
`;

const ReserveInfo= styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  margin-bottom:10px
  margin-top:5px
`;

const Hotel = styled(H3)`
  margin-bottom:-5px
`;

const Label= styled.label`
  font-family:Montserrat
  color:black
  font-size:12px
  margin-top:-5px
`;

const Info = styled.div`
  width:100%;
  display:flex;
  flex-direction:column
`;

const Text = styled.label`
  color:#2E2E2E;
  margin-right: 5px;
`;

const SubText = styled.label`
  color:#848484;
`;

const CheckIn = styled.div`
  margin-top:10px;
  width:100%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom:1px solid #ccc;
  padding-bottom:20px;
`;

const DivSubTotal = styled.div`
    border-bottom: 1px solid #ccc;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-top:15px;
`;

const RowDiv=styled.div`
  width:50%
  height:20px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  margin-bottom: 25px;
`;

const SRowDiv=styled.div`
  width:50%
  height:20px;
  display:flex;
  flex-direction:row;
  align-items:center
  justify-content:flex-end
`;

const Footer = styled.div`
  width:100%;
  background-color:#e2e2e2
  height:50px;
  margin-top:10px
  display:flex;
  align-items:center;
  justify-content:flex-end;
  padding-right:20px
`;

const Img = styled.img`
  width: 215px;
  height: 150px;
  border-radius: 6px;
`;

const NH3 = styled(H3)`
  margin-left:5px
  font-size:20px
  font-family:Roboto;
  margin-right:5px;
`;

export {Container, Header, Title, Line, Body, ReserveInfo, Hotel, Label, Info, Text, SubText, CheckIn, DivSubTotal, RowDiv, SRowDiv, Footer, Img, NH3}
