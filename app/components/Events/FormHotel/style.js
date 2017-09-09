
import styled from 'styled-components';

const Icon = {
  color: '#fff',
  background: '#7db464',
  padding: '8px 10px 10px 10px',
  borderRadius: '6px 0px 0px 6px',
  marginLeft: '8px'
}

const Line = styled.div`
  background-color: #70a0ec;
  width: 90%;
  height: 3px;
  margin: 0px 0px 10px 30px;
`;

const AddInputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 25px;
`;

export {Icon, Line, AddInputs};
