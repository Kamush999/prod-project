import { Button } from 'widgets/Button';
import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './BugButton.module.scss';

interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования отлова ошибок
export const BugButton = (props: BugButtonProps) => {
    const {
        className,
    } = props;
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            className={classNames(cls.BugButton, {}, [className])}
        >
            {t('Ошибка')}
        </Button>
    );
};
