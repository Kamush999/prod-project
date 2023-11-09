import React, {memo, useCallback, useState} from 'react';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Icon} from "shared/ui/Icon/Icon";
import NotificationIcon from "shared/assets/icons/eye_icon.svg";
import {NotificationList} from "entities/Notification";
import {Popover} from "shared/ui/Popups";
import cls from './NotificationButton.module.scss';
import {Drawer} from "shared/ui/Drawer/Drawer";
import {useDevice} from "shared/lib/hooks/useDevice/useDevice";

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])
    const onCloseDrawer = useCallback(() => {
            setIsOpen(false)
        }, [])
    const trigger = (
            <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
                <Icon Svg={NotificationIcon}/>
            </Button>
    )
    const isMobile = useDevice();
    if (isMobile) {
        return (
            <div>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList/>
                </Drawer>
            </div>
        )
    } else {
        return (
            <Popover
                direction={'bottom left'}
                trigger={trigger}>
                <NotificationList className={cls.notifications}/>
            </Popover>
        );
    }
});
