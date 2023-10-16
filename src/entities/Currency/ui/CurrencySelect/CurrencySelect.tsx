import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
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
    const { t } = useTranslation('profile');
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    const options = [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.KZT, content: Currency.KZT },
        { value: Currency.USD, content: Currency.USD },
    ];

    return (
        <ListBox
            placeholder={t('Выберите валюту')}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={Currency.KZT}
            className={classNames('', {}, [className])}
            readonly={readonly}
            direction="top"
        />
    );
});
