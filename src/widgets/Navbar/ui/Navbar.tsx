import {classNames} from 'shared/lib/classNames/classNames';
import React, {memo, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUsername';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, isUserAdmin, isUserManager, userActions,} from 'entities/User';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {getRouteAdminPanel, getRouteArticleNew, getRouteProfile} from 'shared/const/router';
import {Dropdown} from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {HStack} from "shared/ui/Stack";
import {NotificationButton} from "features/notificationButton";
import cls from './Navbar.module.scss';
import {AvatarDropdown} from "features/avatarDropdown";

interface NavbarProps {
    className?: string;
}
export const Navbar = memo((props: NavbarProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('KamushApp')}
                    theme={TextTheme.PRIMARY}
                />
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={getRouteArticleNew()}
                    className={cls.createLink}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap={'16'} className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>

            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
