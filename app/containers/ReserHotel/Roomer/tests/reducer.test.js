
import { fromJS } from 'immutable';
import roomerReducer from '../reducer';

describe('roomerReducer', () => {
  it('returns the initial state', () => {
    expect(roomerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
