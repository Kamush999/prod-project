import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getPosScroll = (state: StateSchema) => state.scroll.scrollSave;
export const getPosScrollByPath = createSelector(
    getPosScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
