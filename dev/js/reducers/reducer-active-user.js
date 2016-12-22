/ "state = null" is set so there is no error thrown when app first boots up

export default function (state = null, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;
    }
    return state;
}
