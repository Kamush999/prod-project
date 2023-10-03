import {
    classNames,
} from 'shared/lib/classNames/classNames';
import {
    useTranslation,
} from 'react-i18next';
import {
    memo,
    useCallback,
} from 'react';
import {
    ArticleDetails,
    ArticleList,
} from 'entities/Article';
import {
    useParams,
} from 'react-router-dom';
import {
    Text,
    TextSize,
} from 'shared/ui/Text/Text';
import {
    CommentList,
} from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicsModuleLoader/DynamicModuleLoader';
import {
    useSelector,
} from 'react-redux';
import {
    useInitialEffect,
} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    useAppDispatch,
} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    AddNewComment,
} from 'features/addNewComment';
import {
    Page,
} from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    ArticleDetailsPageHeader,
} from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
    articleDetailsPageReducer,
} from '../../model/slices';
import {
    getArticleRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import {
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}
const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const {
        className,
    } = props;
    const { id = '1' } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });
    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t('Рекомендуем')}
                    />
                    <ArticleList
                        isLoading={recommendationsIsLoading}
                        articles={recommendations}
                        className={cls.recommendations}
                        target="_blank"
                    />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t('Комментарии')}
                    />
                    <AddNewComment onSendComment={onSendComment} />
                    <CommentList
                        isLoading={commentsIsLoading}
                        comments={comments}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
