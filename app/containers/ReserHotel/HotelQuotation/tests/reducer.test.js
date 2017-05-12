
import { fromJS } from 'immutable';
import hotelQuotationReducer from '../reducer';

describe('hotelQuotationReducer', () => {
  it('returns the initial state', () => {
    expect(hotelQuotationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
