import { ActionReducerMap } from "@ngrx/store"
import { USER_PROP } from "../interface/user.interface"
import { UserReducer } from "./reducers/reducers"

export interface APP_STATE_REDUCERS {
    user: USER_PROP
}

export const reducersAll: ActionReducerMap<APP_STATE_REDUCERS> = {
    user: UserReducer
}