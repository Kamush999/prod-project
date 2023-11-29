import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
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
        <ListBox
            placeholder={t('Выберите страну')}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={Country.KAZAKHSTAN}
            className={classNames('', {}, [className])}
            readonly={readonly}
            direction="top left"
        />
    );
});
