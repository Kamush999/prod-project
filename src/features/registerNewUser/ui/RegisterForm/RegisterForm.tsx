import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '@/shared/ui/Input/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicsModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { VStack } from '@/shared/ui/Stack';
import {
    registerNewUserActions,
    registerNewUserReducer,
} from '@/features/registerNewUser/model/slices/registerNewUserSlice';
import {
    getRegisterAvatar,
    getRegisterPassword,
    getRegisterRoles,
    getRegisterUsername,
} from '@/features/registerNewUser/model/selectors/getRegisterUsername/getRegisterData';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '@/features/registerNewUser/ui/RegisterForm/RegisterForm.module.scss';
import { Text, TextSize } from '@/shared/ui/Text/Text';

export interface RegisterFormProps {
    className?: string;
    onNewUser: (username: string, password: string, avatar: string, roles: string) => void;
}

const RegisterForm = memo((props: RegisterFormProps) => {
    const { t } = useTranslation();
    const {
        className,
        onNewUser,
    } = props;
    const username = useSelector(getRegisterUsername);
    const password = useSelector(getRegisterPassword);
    const avatar = useSelector(getRegisterAvatar);
    const roles = useSelector(getRegisterRoles);
    const dispatch = useAppDispatch();
    const reducers: ReducersList = {
        registerUser: registerNewUserReducer,
    };
    const onUsernameSet = useCallback((value: string) => {
        dispatch(registerNewUserActions.setUsername(value));
    }, [dispatch]);
    const onPasswordSet = useCallback((value: string) => {
        dispatch(registerNewUserActions.setPassword(value));
    }, [dispatch]);
    const onAvatarSet = useCallback((value: string) => {
        dispatch(registerNewUserActions.setAvatar(value));
    }, [dispatch]);
    const onRolesSet = useCallback((value: string) => {
        dispatch(registerNewUserActions.setRoles(value));
    }, [dispatch]);
    const onSendHandler = useCallback(() => {
        onNewUser(username || '', password || '', avatar || '', roles || '');
        onUsernameSet('');
        onPasswordSet('');
        onRolesSet('');
    }, [onRolesSet, onUsernameSet, onPasswordSet, onNewUser, username, password, avatar, roles]);
    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack max justify="between" className={classNames(cls.RegisterForm, {}, [className])}>
                <Text
                    className={cls.text}
                    title={t('Создание юзера и профиля к нему')}
                    size={TextSize.L}
                />
                <Input
                    className={cls.input}
                    value={username}
                    onChange={onUsernameSet}
                    placeholder={t('Юзернейм')}
                />
                <Input
                    className={cls.input}
                    value={password}
                    onChange={onPasswordSet}
                    placeholder={t('Пароль')}
                />
                <Input
                    className={cls.input}
                    value={avatar}
                    onChange={onAvatarSet}
                    placeholder={t('Ссылка на фото профиля')}
                />
                <Input
                    className={cls.input}
                    value={roles}
                    onChange={onRolesSet}
                    placeholder={t('Роль пользователя')}
                />
                <Button
                    className={cls.button}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Создать пользователя')}
                </Button>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default RegisterForm;
