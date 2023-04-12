import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const KamushekPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div>
                <BugButton />
            </div>
            {t('Сайт Камушка')}
        </div>
    );
};

export default KamushekPage;
