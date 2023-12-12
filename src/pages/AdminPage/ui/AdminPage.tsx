import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RegisterForm } from '@/features/registerNewUser';
import { newUserRegister } from '@/features/registerNewUser/model/services/newUserRegister';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import { UserList } from '@/entities/User/ui/UserList/UserList';

const AdminPage = () => {
    const { t } = useTranslation('admin-page');
    const dispatch = useAppDispatch();
    const onNewUserSet = useCallback((username: string, password: string, avatar: string, roles: string) => {
        dispatch(newUserRegister({
            username, password, avatar, roles,
        }));
    }, [dispatch]);
    return (
        <Page>
            <Text
                align={TextAlign.CENTER}
                title={t('Панель админа')}
                size={TextSize.L}
            />
            <RegisterForm onNewUser={onNewUserSet} />
            <Text
                align={TextAlign.CENTER}
                title={t('Список пользователей')}
                size={TextSize.L}
            />
            <UserList />
        </Page>
    );
};

export default AdminPage;
