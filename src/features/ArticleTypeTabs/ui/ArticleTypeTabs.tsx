import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleTypes, ArticleTypesType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleTypesType;
    onChangeType: (type: ArticleTypesType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onChangeType,
    } = props;
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleTypes.ALL,
            content: t('Все'),
        },
        {
            value: ArticleTypes.IT,
            content: t('Айти'),
        },
        {
            value: ArticleTypes.SCIENCE,
            content: t('Наука'),
        },
        {
            value: ArticleTypes.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleTypes.HUMOR,
            content: t('Юмор'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleTypesType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
