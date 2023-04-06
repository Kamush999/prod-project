import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import React from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
interface NavbarProps {
    className?: string;
}
export const Navbar = (props: NavbarProps) => {
    const {
        className,
    } = props;
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={'/'} className={cls.mainLink}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/about'} className={cls.aboutLink}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
