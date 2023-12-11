import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterNewUserSchema } from '@/features/registerNewUser/model/types/registerNewUser';

const initialState: RegisterNewUserSchema = {
    username: '',
    name: '',
    password: '',
    roles: '',
    id: '',
    avatar: '',
};

export const registerNewUserSlice = createSlice({
    name: 'registerNewUser',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setRoles: (state, action: PayloadAction<string>) => {
            state.roles = action.payload;
        },
        setAvatar: (state, action: PayloadAction<string>) => {
            state.avatar = action.payload;
        },
    },
});

export const { actions: registerNewUserActions } = registerNewUserSlice;
export const { reducer: registerNewUserReducer } = registerNewUserSlice;
