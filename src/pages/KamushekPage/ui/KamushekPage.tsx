import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const KamushekPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Сайт Камушка')}
            <Counter />
        </div>
    );
};

export default KamushekPage;
