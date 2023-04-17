import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/aboutPage.svg';
import MainIcon from 'shared/assets/icons/homePage.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}
export const Sidebar = (props: SidebarProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div
            data-testid="Sidebar"
            className={classNames(cls.Sidebar, {}, [className])}
        >
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.PRIMARY}
                        to={RoutePath.main}
                        className={cls.link}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.text}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.PRIMARY}
                        to={RoutePath.about}
                        className={cls.link}
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.text}>
                            {t('О сайте')}
                        </span>
                    </AppLink>

                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
