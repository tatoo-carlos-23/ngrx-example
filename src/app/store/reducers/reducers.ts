import { createReducer, on, State } from "@ngrx/store";

import { USER_PROP } from "../../interface/user.interface";
import { UserData } from '../actions/actions'

const initialState: USER_PROP = {
    name: '',
    apellido: ''

}

export const UserReducer = createReducer(
    initialState,
    on(UserData,
        (state, { ...user }) => ({
            ...state, ...user, fullname: user.name + ' ' + user.apellido
        })),
)