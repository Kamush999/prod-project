import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useState} from "react";
import {LangSwitcher} from "widgets/LangSwitcher";
interface SidebarProps {
    className?: string;
}
export const Sidebar = (props: SidebarProps) => {
    const {
        className,
    } = props;
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>212</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
