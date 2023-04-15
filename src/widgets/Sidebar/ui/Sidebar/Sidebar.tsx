import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarText } from 'widgets/Sidebar/ui/Sidebar/SidebarText';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}
export const Sidebar = (props: SidebarProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div
            data-testid="Sidebar"
            className={classNames(cls.Sidebar, {}, [className])}
        >
            <SidebarText className={cls.sbText} />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
