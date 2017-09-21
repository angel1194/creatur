/*
 *
 * Compare
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCompare from './selectors';
import CompareHotel from '../../../components/CompareHotel'
import Header from '../../../components/Header';

export class Compare extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header li_1="Inicio" li_2="Servicios" li_3="Sobre Nosotros" li_4="Mi reserva" toLink="/"/>
        <Helmet
          title="Compare"
          meta={[
            { name: 'description', content: 'Description of Compare' },
          ]}
        />
      <CompareHotel/>
      </div>
    );
  }
}

Compare.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Compare: makeSelectCompare(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
