// reducer updates state
import {combineReducers} from 'redux';

const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return count + action.increment;
    }
    else if (action.type === 'DECREMENT_COUNTER') {
        if (count - action.decrement < 0) {
            alert("Can't go below 0!!!");
        }
        return count - action.decrement;
    }
    return count;
};

export default combineReducers({
    count: counterReducer
});