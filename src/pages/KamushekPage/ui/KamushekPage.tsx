import React from 'react';
import { useTranslation } from 'react-i18next';

const KamushekPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Сайт Камушка')}
        </div>
    );
};

export default KamushekPage;
