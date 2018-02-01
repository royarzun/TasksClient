import * as actions from 'actions';


export const fetch = () => {
    return {
        type: actions.FETCH_TASKS
    };
};

export const snooze = (slot, id) => {
    return {
        type: actions.SNOOZE_TASK,
        slot,
        id
    };
};

export const unsnooze = id => {
    return {
        type: actions.UNSNOOZE_TASK,
        id
    };
};

export const resolve = (id, actionBody) => {
    return {
        type: actions.RESOLVE_TASK,
        id,
        actionBody
    };
};
