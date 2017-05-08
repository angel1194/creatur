
import { fromJS } from 'immutable';
import hotelHomeReducer from '../reducer';

describe('hotelHomeReducer', () => {
  it('returns the initial state', () => {
    expect(hotelHomeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
