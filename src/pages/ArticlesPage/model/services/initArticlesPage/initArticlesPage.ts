import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { ArticleSortFieldTypes } from '@/entities/Article';
import {
    articlesPageActions,
} from '../../slices/articlesPageSlice';
import {
    fetchArticlesList,
} from '../fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'ArticlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortFieldTypes;
            const searchFromUrl = searchParams.get('search');

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
