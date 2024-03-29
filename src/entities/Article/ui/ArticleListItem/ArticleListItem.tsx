import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import EyeIcon from '@/shared/assets/icons/eye_icon.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Card } from '@/shared/ui/Card/Card';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { getRouteArticleDetail } from '@/shared/const/router';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
    ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article,
    ArticleTextBlock,
    ArticleViewTypes,
} from '../../model/types/article';
import { ArticleBlockTypes, ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleViewTypes;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation('article-details');
    const {
        article,
        view,
        className,
        target,
    } = props;
    const isMobile = useDevice();
    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text align={TextAlign.RIGHT} text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (isMobile) {
        return (
            <AppLink
                target={target}
                to={getRouteArticleDetail(article.id)}
                className={classNames(cls.ArticleListItemMobile, {}, [className, cls[view]])}
            >
                <Card className={cls.cardMobile}>
                    <div className={cls.imageWrapper}>
                        <img alt={article.title} src={article.img} className={cls.imgMobile} />
                        <Text text={article.createdAt} className={cls.dateMobile} />
                    </div>
                    <div className={cls.infoWrapperMobile}>
                        {views}
                    </div>
                    <Text text={article.title} className={cls.titleMobile} />
                </Card>
            </AppLink>
        );
    }

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockTypes.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetail(article.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <AppLink
            target={target}
            to={getRouteArticleDetail(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
