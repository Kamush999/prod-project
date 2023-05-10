import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        onChange,
        value,
        className,
        readonly,
    } = props;
    const { t } = useTranslation('profile');
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    const options = [
        { value: Country.BELARUS, content: Country.BELARUS },
        { value: Country.RUSSIA, content: Country.RUSSIA },
        { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
        { value: Country.GEORGIA, content: Country.GEORGIA },
    ];
    return (
        <Select
            label={t('Выберите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            readonly={readonly}
        />
    );
});
