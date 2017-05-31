
import { fromJS } from 'immutable';
import compareReducer from '../reducer';

describe('compareReducer', () => {
  it('returns the initial state', () => {
    expect(compareReducer(undefined, {})).toEqual(fromJS({}));
  });
});
