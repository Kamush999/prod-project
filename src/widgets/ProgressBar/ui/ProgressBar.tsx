import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProgressBar.module.scss';

interface ProgressBarProps {
    className?: string;
}
export const ProgressBar = (props: ProgressBarProps) => {
    const {
        className,
    } = props;
    return (
        <div className={classNames(cls.ProgressBar, {}, [className])}>
            <span className={classNames(cls.span)} />
        </div>
    );
};
