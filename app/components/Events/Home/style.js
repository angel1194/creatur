import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 873px) and (min-width: 220px) {
    height: 80px;
    width: 100%;
  }
`;

const Img = styled.img`
  margin: 10px 0px 10px 0px;
  cursor: pointer;
  @media only screen and (max-width: 873px) and (min-width: 220px) {
    width: 60%;
    height: 90%;
    margin: 5px 0px 5px 0px;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid rgb(234, 239, 243);
  box-shadow: 3px 3px 4px rgb(234, 239, 243);
  margin-bottom: 20px;
`;

const Icon = styled.div`
  display: none;
  @media only screen and (max-width: 873px) and (min-width: 220px) {
    display: block;
    color: #ccc;
    font-size: 35px;
    margin: 25px 40px 0px 0px;
  }
`

export {Header, Img, Line, Icon}
