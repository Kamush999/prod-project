import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { DiaryPage } from 'pages/DiaryPage';

const MainPage = () => {
    const { t } = useTranslation('main-page');

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
