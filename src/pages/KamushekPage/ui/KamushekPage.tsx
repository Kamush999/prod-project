import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const KamushekPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            {t('Сайт Камушка')}
            <Counter />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Input placeholder="Введите текст" value={value} onChange={onChange} />
        </div>
    );
};

export default KamushekPage;
