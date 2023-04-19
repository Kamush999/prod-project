import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProgressBar } from 'widgets/ProgressBar';
import { AdminPanel } from 'widgets/AdminPanel';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'widgets/Button';
import { ThemeButton } from 'widgets/Button/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = (props: NavbarProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.bars}>
                <ProgressBar />
                <AdminPanel />
            </div>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                ASjkdhkldfhghgflja ldhfkahsgf lha dfldhglfahsjdfgjdhhgfla dhg
            </Modal>
        </div>
    );
};
