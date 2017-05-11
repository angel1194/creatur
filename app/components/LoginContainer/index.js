import React from 'react';
import styled,{ css } from 'styled-components';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router'

const ContainerL = styled(Container)`
  display:flex !important;
  justify-content:center;
`;

const LoginBody = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  width:500px;
  height:300px;
  border: 1px solid #ccc
`;

const LoginHead = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:center;
  width:100%;
  height:60px;
  background-color: #2b5bac;
  color: #FFFFFF;
`;

const H3Login = styled.h3`
  color:white;
  width:100%;
  padding-left:70px;
  margin-bottom:5px;
`;

const Line = styled.div`
  width:85%;
  height:1px;
  border-radius:2px;
  border:1px solid #70a0ec;
`;

const LoginMain = styled.div`
  width:100%;
  height:55%;
  padding:20px 40px;
`;

const ContainerInput = styled.div`
  width:100%;
  height:40px;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  box-shadow: inset 15px 3px 2px  #eaeaea;
  border:1px solid #ccc;
  margin-bottom:10px;
`;

const IconInput = styled.div`
  width:40px;
  height:39px;
  background-color:#87b672;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:20px;
  color:white;
`;

const Input = styled.input`
  width:100%;
  padding-left:10px;
`;

const Label = styled.label`
  font-size:16px;
  color:#2b5bac;
`;

const LoginFooter = styled.div`
  width:100%;
  height:24.8%;
  display:flex;
  flex-direction:row;
  align-items:flex-end;
  justify-content:space-between;
  padding:20px 40px;
`;

const Button = styled.button`
  background-color:#87b672;
  padding:10px 50px;
  color:white;
  margin-left:20px;
`;

const LinkP = styled(Link)`
  color:#b2b2b2 ;
  text-decoration:underline;
`;

function LoginContainer() {
  return (
    <ContainerL>
        <LoginBody>
          <LoginHead>
            <H3Login>Ingresa al Sistema</H3Login>
            <Line/>
          </LoginHead>
          <LoginMain>
            <Label htmlFor='mail'>Mail</Label>
            <ContainerInput>
              <IconInput>
                <i className='fa fa-envelope'></i>
              </IconInput>
              <Input type='email' id='mail' placeholder='tucorreo@aqui.com'/>
            </ContainerInput>
            <Label htmlFor='password'>Contrasena</Label>
            <ContainerInput>
              <IconInput>
                <i className='fa fa-lock'></i>
              </IconInput>
              <Input type='password' id='password'/>
            </ContainerInput>
          </LoginMain>
          <LoginFooter>
            <LinkP to=''>Olvidaste tu contrasena?</LinkP>
            <Button>INGRESAR</Button>
          </LoginFooter>
        </LoginBody>
    </ContainerL>
  );
}

LoginContainer.propTypes = {
};

export default LoginContainer;
