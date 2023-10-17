import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicsModuleLoader/DynamicModuleLoader';
import {
    useInitialEffect,
} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import {
    ArticleInfiniteList,
} from '../../ui/ArticleInfiniteList/ArticleInfiniteList';
import {
    ArticlesPageFilters,
} from '../../ui/ArticlesPageFilters/ArticlesPageFilters';
import {
    fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    initArticlesPage,
} from '../../model/services/initArticlesPage/initArticlesPage';
import cls from './ArticlesPage.module.scss';
import {
    articlesPageReducer,
} from '../../model/slices/articlesPageSlice';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const [searchParams] = useSearchParams();
    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });
    return (
        <DynamicModuleLoader
            removeAfterUnmount={false}
            reducers={reducers}
        >
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
