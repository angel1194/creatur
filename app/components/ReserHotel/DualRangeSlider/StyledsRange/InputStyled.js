import { css } from 'styled-components';
import icon from '../iconSlider.png'

const InputSlyled = css`

  input {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    left: 0;
    width: 100%;
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

 
`;


export default InputSlyled;