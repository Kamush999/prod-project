import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/homePage.svg';
import AboutIcon from 'shared/assets/icons/aboutPage.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile_page,
        Icon: ProfileIcon,
        text: 'Профиль',
    },
    {
        path: RoutePath.my_page,
        Icon: ProfileIcon,
        text: 'Камушек',
    },
];