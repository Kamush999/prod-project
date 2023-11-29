import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { ArticleViewTypes } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleViewTypes;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        view,
        className,
    } = props;

    const isMobile = useDevice();

    if (isMobile) {
        return (
            <div className={classNames(cls.ArticleListItemMobile, {}, [className, cls[view]])}>
                <Card className={cls.cardSkelMobile}>
                    <div className={cls.imageWrapperMobile}>
                        <Skeleton width="85vw" height={165} className={cls.imgMobile} />
                    </div>
                    <div className={cls.infoWrapperSkel}>
                        <Skeleton width={90} height={24} />
                        <Skeleton width={24} height={24} />
                    </div>
                    <div className={cls.titleSkel}>
                        <Skeleton width={180} height={24} />
                    </div>
                </Card>
            </div>
        );
    }

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton width={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.cardSkel}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={165} className={cls.img} />
                </div>
                <div className={cls.infoWrapperSkel}>
                    <Skeleton width={90} height={24} />
                    <Skeleton width={24} height={24} />
                </div>
                <div className={cls.titleSkel}>
                    <Skeleton width={180} height={24} />
                </div>
            </Card>
        </div>
    );
});
