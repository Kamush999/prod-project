import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleView } from '../../model/consts/consts';
import {
    ArticleListItemSkeleton,
} from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleViewTypes } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleViewTypes;
    target?: HTMLAttributeAnchorTarget;
}
const getSkeletons = (view: ArticleViewTypes) => new Array(view === ArticleView.SMALL ? 10 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ));
export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        target,
        view = ArticleView.SMALL,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            target={target}
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    );
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
