import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Img = styled.img`
  margin: 10px 0px 10px 0px;
  cursor: pointer;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 35px;
`;

const Li = styled.li`
  color: #b2b2b2;
  padding-top: 15px;
  cursor: pointer;

  &:hover {
    background: #7db464;
    color: #fff;
    transition: 0.3s;
  }
`;

export {Nav, Img, Ul, Li}
