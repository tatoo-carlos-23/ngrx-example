import { createAction, props } from '@ngrx/store';
import { USER_PROP } from '../../interface/user.interface';

export const UserData = createAction('[User] UserData',
    props<USER_PROP>()
);


export const FullNameData = createAction('[User] FulNameData'); 