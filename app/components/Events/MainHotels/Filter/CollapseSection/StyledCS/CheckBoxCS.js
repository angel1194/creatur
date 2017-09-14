import styled from 'styled-components';

const CheckBoxCS = styled.div`
     
     &.checkboxFour {
	width: 15px;
	height: 15px;
	background: #87b672;
	margin: 0;
	border-radius: 50%;
	position: relative;
	
    
}


&.checkboxFour label {
	display: block;
	width: 11px;
	height: 11px;
	border-radius: 50%;

	transition: all .5s ease;
	cursor: pointer;
	position: absolute;
	z-index: 1;
	top: 2px;
	left: 2px;
	background: #fff;
	
}

&.checkboxFour input[type=checkbox]{
	visibility:hidden;
}

&.checkboxFour input[type=checkbox]:checked + label {
	background: #87b672;
}

`;

export default CheckBoxCS;