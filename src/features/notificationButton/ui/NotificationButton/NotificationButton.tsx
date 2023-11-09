import React, {memo} from 'react';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Icon} from "shared/ui/Icon/Icon";
import NotificationIcon from "shared/assets/icons/eye_icon.svg";
import {NotificationList} from "entities/Notification";
import {Popover} from "shared/ui/Popups";
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    return (
        <Popover
            direction={'bottom left'}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon}/>
                </Button>
            )}>
            <NotificationList className={cls.notifications}/>
        </Popover>
    );
});
