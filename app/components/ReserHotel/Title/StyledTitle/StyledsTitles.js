import Styled from 'styled-components';


const Line = Styled.hr`
     border: 1px solid #719fec;
     margin: 0;
     margin-left: 8%;
     margin-right: 8%;
     border-radius: 5px;
     position: relative;
     top:17px
`;

const Text = Styled.p`
     text-align : center;
     color : #ffffff;
     font-family : 'Montserrat';
     font-size: 18px;
     margin:0 ;
     top: 14px;
     position: relative;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
`;

const Wrapper = Styled.div`

     width: 100%;
     height: 54px;
     background-color: #2b5bac;
     border-radius: 6px 6px 0 0;
   

`;


export { Line, Text, Wrapper };

