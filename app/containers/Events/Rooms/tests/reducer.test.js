
import { fromJS } from 'immutable';
import roomsReducer from '../reducer';

describe('roomsReducer', () => {
  it('returns the initial state', () => {
    expect(roomsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
