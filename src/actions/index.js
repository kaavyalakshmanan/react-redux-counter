export const increment = amount => {
    return {
        type: 'INCREMENT_COUNTER',
        // payload, can attach multiple
        increment: amount

    };
};

export const decrement = amount => {
    return {
        type: 'DECREMENT_COUNTER',
        // payload, can attach multiple
        decrement: amount

    };
};