import { UserState, UserAction, UserActionType } from '../../types/types' 

const defaultState: UserState = {
    user: null,
}

const Reducer = (state: UserState = defaultState, action: UserAction) => {
    switch (action.type) {
        case UserActionType.FETCH_USER_SUCCESS: {
            return {user: action.payload}
        }
        case UserActionType.FETCH_USER_ERROR: {
            return {user: action.payload}
        }
        case UserActionType.CLEAR_USER: {
            return {user: action.payload}
        }
        default: {
            return state;
        }
    }
}

export {Reducer as userReducer};