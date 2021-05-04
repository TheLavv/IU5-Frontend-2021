export interface UserState {
    user: any,
}

export enum UserActionType {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    CLEAR_USER,
}

export interface UserAction {
    type: UserActionType,
    payload: any,
}

export type ParamsType = { userName: string };