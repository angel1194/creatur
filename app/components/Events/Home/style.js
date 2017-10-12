import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  margin: 10px 0px 10px 0px;
  cursor: pointer;
`;

const Line = styled.div`
  border-bottom: 1px solid rgb(234, 239, 243);
  box-shadow: 3px 3px 4px rgb(234, 239, 243);
  margin-bottom: 20px;
`;

export {Header, Img, Line}
