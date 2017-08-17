import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const DivTitle = styled.div`
  background-color: #F2F2F2;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 15px;
`;

const Title = styled.p`
  color: #2b5bac;
  font-size: 25px;
  font-weight: bold;
  font-family: Montserrat !important;
`;

const Subtitle = styled.p`
  color: #b2b2b2;
  font-size: 18px;
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FlexStart = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LinkA = styled.a`
  color: #87b672 !important;
  text-decoration: underline;
  margin-top: 25px;
  cursor: pointer;
`;

const ContainerCart = styled.div`
  border: 3px solid #F2F2F2;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 15px;
`;

const ButtonGreen = styled.label`
  width: auto;
  border-bottom: 1px solid white;
  color: #fff;
`;

const Space = styled(FontAwesome) `
  margin-left:5px;
`;

const ContainerButtonGreen = styled.div`
  width: 160px;
  margin-bottom: 20px;
  background: #87b672;
  color: white;
  font-family: Montserrat;
  padding: 5px 15px;
  border-radius: 6px;
  margin-top: 15px;
`;

export {Title, Subtitle, DivTitle, FlexEnd, FlexStart, LinkA, ContainerCart, ButtonGreen, Space, ContainerButtonGreen};
