import styled, { css } from 'styled-components';
import icon from '../iconSlider.png'


const InputContainer = styled.div`

    position: relative;
    height: 25px;
    top: -5px;
    padding-left: 5%;
    
    input {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    width: 90%;
    outline: none;
    height: 35px;
    margin: 0;
    padding: 0;
}

 input[type=range] {
    -webkit-appearance: none;
    -moz-appearance: none;
}

input[type=range]::-webkit-slider-runnable-track {
   
    background-color: #87b672;
    height: 6px;
    border-radius: 13px;
    border: 1px solid #87b672;
}

input[type=range]:last-of-type::-moz-range-track {
    -moz-appearance: none;
    background: none transparent;
    border: 0;
}

input[type=range]::-moz-range-track {
    -moz-appearance: none;
    background-color: #87b672;
    height: 6px;
    border-radius: 13px;
    border: none;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    top: -10px;
    pointer-events: all;
    border: 1px solid #87b672;
    border-radius:50%;
    background-image:url(${icon});
    background-color: white;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;
    z-index: 1;
    outline: 0;
    height: 25px;
    width: 25px;
}

input[type=range]::-moz-range-thumb {
    -moz-appearance: none;
    pointer-events: all;
    border: 1px solid #87b672;
    border-radius:50%;
    background-image:url(${icon});
    background-color: white;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;
    z-index: 1;
    outline: 0;
    height: 23px;
    width: 23px;
}



input[type=range]::-moz-focus-outer {
    border: 0;

 
}
`;

const Wrapper = styled.div`
     flex-flow: column nowrap;

`;


export { InputContainer, Wrapper };