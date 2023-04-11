import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}
export const Sidebar = (props: SidebarProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
