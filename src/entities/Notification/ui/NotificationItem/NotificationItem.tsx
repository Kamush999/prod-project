import React, {memo} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {Notifications} from "../../model/types/notifications";
import {Card, CardTheme} from "shared/ui/Card/Card";
import {Text} from "shared/ui/Text/Text";
import cls from "./NotificationItem.module.scss";
import {AppLink} from "shared/ui/AppLink/AppLink";
interface NotificationItemProps {
    className?: string;
    item: Notifications
}
export const NotificationItem = memo((props: NotificationItemProps) => {
    const {className, item} = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description}/>
        </Card>
    )

    if (item.href) {
        return (
            <a className={cls.link} target={'_blank'} href={item.href}>
                {content}
            </a>
        )
    }

    return content;
});
