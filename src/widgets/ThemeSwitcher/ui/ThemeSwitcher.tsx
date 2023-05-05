import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeButton from 'shared/assets/icons/themeSwitcher.svg';
import { Button, ButtonTheme } from 'widgets/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {
        className,
    } = props;
    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeButton />
        </Button>
    );
};
