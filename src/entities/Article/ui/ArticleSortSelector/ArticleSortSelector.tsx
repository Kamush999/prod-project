import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { VStack } from 'shared/ui/Stack';
import { ArticleSortFieldTypes } from '../../model/types/article';
import { ArticleSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    order: SortOrder;
    sort: ArticleSortFieldTypes;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortFieldTypes) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { t } = useTranslation('article-details');
    const {
        className,
        order,
        sort,
        onChangeOrder,
        onChangeSort,
    } = props;
    const isMobile = useDevice();

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortFieldTypes>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);

    // TODO сделать уже норм сортировку, сейчас выводится value как asd, desc, title, createdAt и т.д

    if (isMobile) {
        return (
            <VStack gap="8" className={classNames(cls.ArticleSortSelectorMobile, {}, [className])}>
                <Select
                    options={sortFieldOptions}
                    label={t('по')}
                    value={sort}
                    onChange={onChangeSort}
                />
                <Select
                    options={orderOptions}
                    label={t('по')}
                    value={order}
                    onChange={onChangeOrder}
                    className={cls.orderMobile}
                />
            </VStack>
        );
    }

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            {/* <ListBox */}
            {/*   placeholder={t('Сортировать по')} */}
            {/*   onChange={(value) => { */}
            {/*       // Преобразовать value в тип ArticleSortFieldTypes */}
            {/*       const newOrder: SortOrder = value as SortOrder; */}
            {/*       onChangeOrder(newOrder); */}
            {/*   }} */}
            {/*   value={order} */}
            {/*   items={orderOptions} */}
            {/*   defaultValue={ArticleSortField.CREATED} */}
            {/*   className={classNames('', {}, [className])} */}
            {/*   direction="bottom right" */}
            {/* /> */}
            {/* <ListBox */}
            {/*   placeholder={t('по')} */}
            {/*   onChange={(value) => { */}
            {/*       // Преобразовать value в тип ArticleSortFieldTypes */}
            {/*       const newSort: ArticleSortFieldTypes = value as ArticleSortFieldTypes; */}
            {/*       onChangeSort(newSort); */}
            {/*   }} */}
            {/*   value={sort} */}
            {/*   items={sortFieldOptions} */}
            {/*   defaultValue="asc" */}
            {/*   className={classNames(cls.order, {}, [className])} */}
            {/*   direction="bottom right" */}
            {/* /> */}
            <Select
                options={sortFieldOptions}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
