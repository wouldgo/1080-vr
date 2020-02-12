import { POSTS_FETCH_SUCCESS } from '../actions/types';
import initialState from '../initial-state'

export default (state = initialState, action) => {
    switch (action.type) {
        case POSTS_FETCH_SUCCESS:
            return action.payload;
        default:
        return state;
    }
};
