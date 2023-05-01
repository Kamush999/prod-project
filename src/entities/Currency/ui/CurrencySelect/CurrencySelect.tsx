import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}
export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        onChange,
        value,
        className,
        readonly,
    } = props;
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    const options = [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.KZT, content: Currency.KZT },
        { value: Currency.USD, content: Currency.USD },
    ];
    return (
        <Select
            label={t('Выберите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            readonly={readonly}
        />
    );
});
