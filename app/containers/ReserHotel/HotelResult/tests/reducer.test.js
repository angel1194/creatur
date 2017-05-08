
import { fromJS } from 'immutable';
import hotelResultReducer from '../reducer';

describe('hotelResultReducer', () => {
  it('returns the initial state', () => {
    expect(hotelResultReducer(undefined, {})).toEqual(fromJS({}));
  });
});
