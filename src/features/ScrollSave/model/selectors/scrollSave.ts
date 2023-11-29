import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getPosScroll = (state: StateSchema) => state.scroll.scrollSave;
export const getPosScrollByPath = createSelector(
    getPosScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
