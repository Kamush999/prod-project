import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AdminPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Панель админа')}
        </Page>
    );
};

export default AdminPage;
