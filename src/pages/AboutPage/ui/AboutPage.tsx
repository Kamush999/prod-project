import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Сайт портфолио')}
        </div>
    );
};

export default AboutPage;
