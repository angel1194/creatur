
import { fromJS } from 'immutable';
import flyFormReducer from '../reducer';

describe('flyFormReducer', () => {
  it('returns the initial state', () => {
    expect(flyFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
