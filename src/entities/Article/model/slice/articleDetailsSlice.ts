import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { Article } from '../types/article';
import {
    fetchArticleById,
} from '../services/fetchArticleById/fetchArticleById';
import {
    ArticleDetailsSchema,
} from '../types/ArticleDetailsSchema';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
        updateArticle: (state, action: PayloadAction<Article>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;

export const { reducer: articleDetailsReducer } = articleDetailsSlice;
