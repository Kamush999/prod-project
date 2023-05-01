import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { KamushekPage } from 'pages/KamushekPage';
import { ProfilePage } from 'pages/ProfilePage';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    MY = 'my_page',
    PROFILE = 'profile_page',
    // last page not found page!!!
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MY]: '/my',
    [AppRoutes.PROFILE]: '/profile',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.MY]: {
        path: RoutePath.my_page,
        element: <KamushekPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile_page,
        element: <ProfilePage />,
        authOnly: true,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
