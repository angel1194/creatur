import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const LoginBody = styled.div`
  display:flex;
  flex-direction:column;
  background-color:red;
  width:500px;
  height:320px;
  border: 2px solid #ecf0f1;
`;

const LoginHead = styled.div`
  width:100%;
  height:70px;
  display:flex
  flex-wrap:wrap;
  flex-direction:column;
  align-items:center;
  background-color: #2b5bac;
  color: #FFFFFF;
`;

const H3Login = styled.h3`
  color:white;
  margin-left:-300px;
  margin-bottom:5px;
`;

const Line = styled.div`
  width:80%;
  border: 1px solid white;
`;

const LoginMain = styled.div`

`;

const Div = styled.div`
  display:flex;
  justify-content:center
`;


function LoginContainer() {
  return (
    <Container>
      <Div>
        <LoginBody>
          <LoginHead>
            <H3Login>Ingresa al Sistema</H3Login>
            <Line/>
          </LoginHead>
        </LoginBody>
      </Div>
    </Container>
  );
}

LoginContainer.propTypes = {

};

export default LoginContainer;
