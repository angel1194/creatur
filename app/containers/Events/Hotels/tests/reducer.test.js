
import { fromJS } from 'immutable';
import hotelsReducer from '../reducer';

describe('hotelsReducer', () => {
  it('returns the initial state', () => {
    expect(hotelsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
