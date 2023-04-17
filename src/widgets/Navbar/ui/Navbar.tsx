import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProgressBar } from 'widgets/ProgressBar';
import { AdminPanel } from 'widgets/AdminPanel';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = (props: NavbarProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.bars}>
                <ProgressBar />
                <AdminPanel />
            </div>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
};
