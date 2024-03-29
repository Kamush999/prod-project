import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { validateProfileData } from '../validateProfile/validateProfile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ValidateProfileErrors } from '../../consts/consts';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState());
        const errors = validateProfileData(formData);
        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
        }
    },
);
