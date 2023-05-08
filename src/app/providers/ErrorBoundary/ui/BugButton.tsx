import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './BugButton.module.scss';

interface BugButtonProps {
    theme?: ButtonTheme;
    className?: string;
}
// Компонент для тестирования ErrorBoundary
export const BugButton = (props: BugButtonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const {
        className,
        theme = ButtonTheme.CLEAR,
    } = props;
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            className={classNames(cls.BugButton, {}, [className, cls[theme]])}
            onClick={onThrow}
        >
            {t('Ошибка')}
        </Button>
    );
};
