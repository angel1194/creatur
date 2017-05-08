import styled from 'styled-components';

const CheckBoxCS = styled.div`
     
     &.checkboxFour {
	width: 20px;
	height: 20px;
	background: #87b672;
	margin: 0;
	border-radius: 50%;
	position: relative;
	
    
}


&.checkboxFour label {
	display: block;
	width: 14px;
	height: 14px;
	border-radius: 50%;

	transition: all .5s ease;
	cursor: pointer;
	position: absolute;
	z-index: 1;
	top: 3px;
	left: 3px;
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