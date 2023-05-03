import React from 'react';
import { useTranslation } from 'react-i18next';

const AdminPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Панель админа')}
        </div>
    );
};

export default AdminPage;
