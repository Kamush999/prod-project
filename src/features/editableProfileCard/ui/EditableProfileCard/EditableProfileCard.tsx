import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    useInitialEffect,
} from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { ProfileCard } from '@/entities/Profile';
import {
    DynamicModuleLoader, ReducersList,
} from '@/shared/lib/components/DynamicsModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import {
    EditableProfileCardHeader,
} from '../../ui/EditableProfileCardHeader/EditableProfileCardHeader';
import {
    getProfileForm,
} from '../../model/selectors/getProfileForm/getProfileForm';
import {
    getProfileReadonly,
} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {
    profileActions, profileReducer,
} from '../../model/slice/profileSlice';
import {
    getProfileError,
} from '../../model/selectors/getProfileError/getProfileError';
import {
    fetchProfileData,
} from '../../model/services/fetchProfileData/fetchProfileData';
import {
    getProfileValidateErrors,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import {
    getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { ValidateProfileErrors } from '../../model/consts/consts';

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { t } = useTranslation('profile-page');
    const {
        className,
        id,
    } = props;
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const validateErrorsTranslates = {
        [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileErrors.INCORRECT_CURRENCY]: t('Некорректный вид валюты'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Некорректные данные пользователя'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
    };
    const reducers: ReducersList = {
        profile: profileReducer,
    };
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    const onChangeAge = useCallback((value?: string) => {
        const validatedValue = value?.replace(/\D+/gm, '');
        dispatch(profileActions.updateProfile({ age: Number(validatedValue || 0) }));
    }, [dispatch]);
    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);
    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);
    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <VStack gap="8" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorsTranslates[err]}
                        data-testid="EditableProfileCard.Error"
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>

    );
});
