import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticleSortFieldTypes,
    ArticleTypesType,
    ArticleViewTypes,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    view: ArticleViewTypes;
    order: SortOrder;
    sort: ArticleSortFieldTypes;
    search: string;
    type: ArticleTypesType;

    _inited: boolean;
}
