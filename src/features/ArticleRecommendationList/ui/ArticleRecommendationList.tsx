import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import {
    useArticleRecommendationList,
} from '../api/ArticleRecommendationApi';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;
    const { isLoading, data: articles, error } = useArticleRecommendationList(3);
    if (isLoading || error || !articles) {
        return null;
    }
    return (
        <VStack
            gap="8"
            className={classNames('', {}, [className])}
        >
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
