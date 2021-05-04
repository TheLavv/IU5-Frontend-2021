import { Dispatch } from "redux"
import { UserAction, UserActionType } from "../types/types"

export const fetchUser = (userName: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        fetch(`https://api.github.com/users/${userName}`, {
            headers: {
                Authorization: `${process.env.REACT_APP_GIT_API_KEY}`,
            }
        })
        .then((data) => {
            if (data.status === 404)
            {
                dispatch({
                    type: UserActionType.FETCH_USER_ERROR,
                    payload: 404
                })
                return null;
            }
            else
                return (data.json());
        })
        .then ((data) => {
            if (data)
            {
                dispatch({ 
                    type: UserActionType.FETCH_USER_SUCCESS, 
                    payload: data
                })
            }
        })
    }
}

export const clearUser = () => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.CLEAR_USER,
            payload: null
        })
    }
}