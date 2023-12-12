import React, { memo } from 'react';
import { VStack } from '@/shared/ui/Stack';
import { UserCard } from '@/entities/User';
import { useUsers } from '@/entities/User/api/userApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UserList.module.scss';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicsModuleLoader/DynamicModuleLoader';
import { registerNewUserReducer } from '@/features/registerNewUser/model/slices/registerNewUserSlice';

interface UserListProps {
    className?: string;
}

export const UserList = memo((props: UserListProps) => {
    const {
        className,
    } = props;
    const { data, isLoading } = useUsers(null, {
        pollingInterval: 12000,
    });
    const reducers: ReducersList = {
        registerUser: registerNewUserReducer,
    };

    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.UserList, {}, [className])}
            >
                <Skeleton width="100%" border="12px" height="80px" />
                <Skeleton width="100%" border="12px" height="80px" />
                <Skeleton width="100%" border="12px" height="80px" />
            </VStack>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                gap="8"
                max
                className={classNames(cls.UserList, {}, [className])}
            >
                {data?.map((user) => (
                    (
                        <UserCard user={user} key={user.id} />
                    )
                ))}
            </VStack>
        </DynamicModuleLoader>
    );
});
