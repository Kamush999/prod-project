import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'widgets/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}
export const PageError = (props: PageErrorProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button
                className={classNames(cls.ErrorButton, {}, [className])}
                onClick={reloadPage}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
