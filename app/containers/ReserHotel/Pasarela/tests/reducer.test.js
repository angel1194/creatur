
import { fromJS } from 'immutable';
import pasarelaReducer from '../reducer';

describe('pasarelaReducer', () => {
  it('returns the initial state', () => {
    expect(pasarelaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
