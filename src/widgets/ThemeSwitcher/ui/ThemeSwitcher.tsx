import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/lightIcon.svg';
import DarkIcon from 'shared/assets/icons/darkIcon.svg';
import { Button } from 'widgets/Button';
import { ThemeButton } from 'widgets/Button/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {
        className,
    } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
