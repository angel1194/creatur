
import styled, { css } from 'styled-components';
import IcnDefault from '../MapDefault.jpg';

const Wrapper = styled.div`

  flex:1 1 20%;
  order:1;
  border: 2px solid #eaeff3;
  margin: 4px;
  min-width: 235px;
  margin-right: 18px;
  /*  Responsive*/
  @media only screen and (min-width:481px) and (max-width:768px){
    width: 250px;
    position: relative;
    margin-left: 380px;
  }

  `;

const Img = styled.div`
  width:232px;
  height:116px
  background-image:url(${IcnDefault});
  background-size:100% auto;
  border-radius: 6px;
  /*  Responsive*/
  @media only screen and (max-device-width: 480px){
    width: 405px;
    display: inline-block;
  }
    @media only screen and (min-width:481px) and (max-width:768px){
      width: 250px;
    }

`;

const ButtonIcon = styled.button`
    position: relative;
    background-color: #2b5bac;
    margin:0;
    width: 112px;
    height: 30px;
    top: 86px;
    left: 120px;
    display: flex;
    justify-content: center;
    border-radius: 6px 0 6px 0 !important;

    @media only screen and (max-device-width: 480px){
     position: relative;
     margin-left: 175px;
     display: inline-block;
    }

`;

const Text = styled.p`
     text-align : center;
     color : #ffffff;
     font-family : 'Montserrat';
     font-size: 15px;
     margin:0;
     top: 3px;
     position:relative;

`;



export { Wrapper, Img, ButtonIcon, Text };
