import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '@/entities/User';
import { Profile } from '@/entities/Profile';

interface UserAuthData {
    username: string;
    password: string;
    avatar?: string;
    roles?: string;
}

export const newUserRegister = createAsyncThunk<
    User,
    UserAuthData,
    ThunkConfig<UserAuthData>
>(
    'registerNewUser/newUserRegister',
    async (userAuthData, thunkApi) => {
        const {
            extra, rejectWithValue,
        } = thunkApi;

        try {
            const userId = uuidv4();
            const response = await extra.api.post<User>('/users', {
                id: userId,
                username: userAuthData.username,
                password: userAuthData.password,
                avatar: userAuthData.avatar,
                roles: userAuthData.roles,
            });
            const responseProfileData = await extra.api.post<Profile>('/profile', {
                id: userId,
                first: userAuthData.username,
                lastname: userAuthData.username,
                username: userAuthData.username,
                avatar: userAuthData.avatar,
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            // @ts-ignore
            return rejectWithValue(e);
        }
    },
);
