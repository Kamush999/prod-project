import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import cls from './UserCard.module.scss';
import { User } from '@/entities/User';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userDelete } from '@/features/registerNewUser/model/services/userDelete';
import { getRouteProfile } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface UserItemProps {
    className?: string;
    user: User;
}

export const UserCard = memo((props: UserItemProps) => {
    const { className, user } = props;
    const { t } = useTranslation('');
    const dispatch = useAppDispatch();
    const onDeleteUser = useCallback(() => {
        dispatch(userDelete(user.id));
    }, [user.id, dispatch]);
    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.UserCard, {}, [className])}
        >
            <HStack justify="between">
                <AppLink to={getRouteProfile(user.id)} className={cls.header}>
                    <Text title={user.username} text={user.id} />
                </AppLink>
                <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onDeleteUser}
                >
                    {t('X')}
                </Button>
            </HStack>
        </Card>
    );

    return content;
});
