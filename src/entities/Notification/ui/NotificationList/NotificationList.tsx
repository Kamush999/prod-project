import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { NotificationItem } from '../../ui/NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}
export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            // todo поправить скелетоны
            <VStack
                gap="8"
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" border="12px" height="80px" />
                <Skeleton width="100%" border="12px" height="80px" />
                <Skeleton width="100%" border="12px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="8"
            className={classNames(cls.NotificationList, {}, [className])}
            max
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
