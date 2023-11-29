import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/homePage.svg';
import AboutIcon from '@/shared/assets/icons/aboutPage.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import {
    getRouteAbout, getRouteArticles,
    getRouteMain,
} from '@/shared/const/router';
import { SidebarItemType } from '../../model/types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteArticles(),
                    Icon: ArticleIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
