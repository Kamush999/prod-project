import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicsModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import DateIcon from 'shared/assets/icons/date_icon.svg';
import EyeIcon from 'shared/assets/icons/eye_icon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleBlockTypes } from '../../model/consts/consts';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails/articleDetails';
import {
    ArticleCodeBlockComponent,
} from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    ArticleTextBlockComponent,
} from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    ArticleImageBlockComponent,
} from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
    fetchArticleById,
} from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleBlock } from '../../model/types/article';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const {
        className,
        id,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockTypes.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockTypes.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockTypes.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    let content;
    if (isLoading) {
        content = (
            <VStack max gap="16">
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={100} />
                <Skeleton className={cls.skeleton} width="100%" height={700} />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <VStack max gap="16">
                <HStack justify="center">
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <HStack max gap="16" justify="between">
                    <Text
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <VStack>
                        <HStack gap="8">
                            <Icon Svg={EyeIcon} className={cls.icon} />
                            <Text text={String(article?.views)} />
                        </HStack>
                        <HStack gap="8">
                            <Icon Svg={DateIcon} className={cls.icon} />
                            <Text text={article?.createdAt} />
                        </HStack>
                    </VStack>
                </HStack>
                {article?.blocks.map(renderBlock)}
            </VStack>
        );
    }

    const reducers: ReducersList = {
        articleDetails: articleDetailsReducer,
    };
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack max gap="16" className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
