import * as types from '../actions/tasks/types';

const initialState = {
    data: [],
    isFetching: false
};


export const data = (state=initialState, action) => {
    switch (action.type) {
        case types.TASKS_FETCH_BEGIN: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.TASKS_FETCH_SUCCESS: {
            return {
                isFetching: false,
                data: {
                    ...state.data,
                }
            }
        }
        case types.TASKS_FETCH_ERROR: {
            return {
                ...state,
                isFetching: false
            }
        }
        default:
            return state;
    }
};
