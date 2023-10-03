import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView, ArticleViewTypes } from 'entities/Article';
import BigIcon from 'shared/assets/icons/line_articles.svg';
import SmallIcon from 'shared/assets/icons/tiles_articles.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleViewTypes,
    onViewClick?: (view: ArticleViewTypes) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: SmallIcon,
    },
    {
        view: ArticleView.BIG,
        icon: BigIcon,
    },
];
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;
    const onClick = (newView: ArticleViewTypes) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
});
