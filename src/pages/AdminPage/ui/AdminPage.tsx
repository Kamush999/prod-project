import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { NumberGame } from 'entities/NumberGame/NumberGame';

const AdminPage = () => {
    const { t } = useTranslation('admin-page');
    return (
        <Page>
            {t('Панель админа')}
            <NumberGame />
        </Page>
    );
};

export default AdminPage;
