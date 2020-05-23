// reducer updates state
import {combineReducers} from 'redux';

const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return count + action.increment;
    }
    else if (action.type === 'DECREMENT_COUNTER') {
        return count - action.decrement;
    }
    return count;
};

export default combineReducers({
    count: counterReducer
});