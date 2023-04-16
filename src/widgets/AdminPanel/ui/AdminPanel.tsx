import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import cls from './AdminPanel.module.scss';

interface AdminPanelProps {
    className?: string;
}
export const AdminPanel = (props: AdminPanelProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;
    return (
        <div className={classNames(cls.AdminPanel, {}, [className])}>
            {t('Админ панель')}
            <div>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to="/my"
                    className={cls.kamushLink}
                >
                    {t('Здрасте')}
                </AppLink>
            </div>
        </div>
    );
};
