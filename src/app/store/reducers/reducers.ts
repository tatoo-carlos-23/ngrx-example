import { createReducer, on, State } from "@ngrx/store";

import { USER_PROP } from "../../interface/user.interface";
import { UserData } from '../actions/actions'

const initialState: USER_PROP = {
    name: 'User',
    apellido: 'Initial'
}

export const UserReducer = createReducer(
    initialState,
    on(UserData,
        (state, { ...user }) => ({
            // apellido: user.apellido, name: user.name
            ...state, ...user
        }))
)


