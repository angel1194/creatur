/**
*
* FormTableAdmin
*
*/

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
`;
class FormTableAdmin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>{this.props.row}</th>
              <th>{this.props.rowtwo}</th>
              <th>{this.props.rowthree}</th>
              <th>{this.props.rowfour}</th>
              <th>Eliminar</th>
              <th>Editar</th>
              <th>Agregar</th>
            </tr>
          </thead>
           <tbody>
             <tr>
               <td>{this.props.tdata}</td>
               <td>{this.props.tdatatwo}</td>
               <td>{this.props.tdatathree}</td>
               <td>{this.props.tdatafour}</td>
               <td><span className='fa-trash'></span></td>
               <td><span className='fa-pencil-square'></span></td>
               <td><span className='fa-plus-square-o '></span></td>
             </tr>
           </tbody>
        </table>
      </Container>
    );
  }
}

FormTableAdmin.propTypes = {

};

export default FormTableAdmin;
