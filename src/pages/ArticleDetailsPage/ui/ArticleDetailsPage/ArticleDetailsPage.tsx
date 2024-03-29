import {
    useTranslation,
} from 'react-i18next';
import {
    memo,
} from 'react';
import {
    useParams,
} from 'react-router-dom';
import {
    ArticleDetails,
} from '@/entities/Article';
import {
    classNames,
} from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicsModuleLoader/DynamicModuleLoader';
import {
    Page,
} from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import {
    ArticleDetailsComments,
} from '../../ui/ArticleDetailsComments/ArticleDetailsComments';
import {
    ArticleDetailsPageHeader,
} from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
    articleDetailsPageReducer,
} from '../../model/slices';
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
    const { id } = useParams<{id: string}>();

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
                    <ArticleRecommendationList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
