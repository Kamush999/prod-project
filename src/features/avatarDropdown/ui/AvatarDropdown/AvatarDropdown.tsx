import React, {memo, useCallback} from 'react';
import {getRouteAdminPanel, getRouteProfile} from "shared/const/router";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Dropdown} from "shared/ui/Popups";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from "entities/User";

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const {className} = props
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottom left"
            items={[
                ...(isAdmin ? [{
                    content: t('Админка'),
                    href: getRouteAdminPanel(),
                }] : []),
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData.id),
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
