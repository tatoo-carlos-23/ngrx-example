export interface USER_PROP {
    name: string
    apellido?: string
    fullname?: string
}

export interface APP_STATE {
    user: USER_PROP
}