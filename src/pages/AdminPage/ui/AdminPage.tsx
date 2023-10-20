import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPage = () => {
    const { t } = useTranslation('admin-page');
    return (
        <Page>
            {t('Панель админа')}
        </Page>
    );
};

export default AdminPage;
