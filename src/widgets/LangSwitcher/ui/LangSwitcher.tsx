import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'widgets/Button';
import React from 'react';
import { ThemeButton } from 'widgets/Button/ui/Button';

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = (props: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const {
        className,
    } = props;
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (

        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};
