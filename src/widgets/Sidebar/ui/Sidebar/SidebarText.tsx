import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './SidebarText.module.scss';

interface SidebarTextProps {
    className?: string;
}
export const SidebarText = (props: SidebarTextProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;
    return (
        <div className={classNames(cls.SidebarText, {}, [className])}>
            <div className={cls.s}>{t('С')}</div>
            <div className={cls.i}>{t('A')}</div>
            <div className={cls.d}>{t('Й')}</div>
            <div className={cls.e}>{t('Д')}</div>
            <div className={cls.b}>{t('Б')}</div>
            <div className={cls.a}>{t('А')}</div>
            <div className={cls.r}>{t('Р')}</div>
        </div>
    );
};
