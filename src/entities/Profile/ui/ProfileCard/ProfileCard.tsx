import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency } from '@/entities/Currency/model/types/currency';
import { CurrencySelect } from '@/entities/Currency';
import { Country } from '@/entities/Country/model/types/country';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeCountry?: (country: Country) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeCountry,
        onChangeCurrency,
        onChangeAvatar,
        onChangeUsername,
    } = props;
    const isMobile = useDevice();
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    if (isMobile) {
        return (
            <VStack gap="8" max className={classNames(cls.ProfileCardMobile, mods, [className])}>
                {data?.avatar && (
                    <HStack justify="center" max className={cls.avatarWrapper}>
                        <Avatar
                            size={200}
                            src={data?.avatar}
                        />
                    </HStack>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.inputMobile}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                    data-testid="ProfileCard.Firstname"
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.inputMobile}
                    onChange={onChangeLastname}
                    readonly={readonly}
                    data-testid="ProfileCard.Lastname"
                />
                <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    className={cls.inputMobile}
                    onChange={onChangeUsername}
                    readonly={readonly}
                    data-testid="ProfileCard.Username"
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.inputMobile}
                    onChange={onChangeAge}
                    readonly={readonly}
                    data-testid="ProfileCard.Age"
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                    className={cls.inputMobile}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.inputMobile}
                    onChange={onChangeCity}
                    readonly={readonly}
                    data-testid="ProfileCard.City"
                />

                <CurrencySelect
                    className={cls.inputMobile}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <Input
                    value={data?.avatar}
                    placeholder={t('Ссылка на аватар')}
                    className={cls.inputMobile}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
            </VStack>
        );
    }
    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={data?.avatar}
                    />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.Firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.Lastname"
            />
            <Input
                value={data?.username}
                placeholder={t('Имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid="ProfileCard.Username"
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid="ProfileCard.Age"
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
                className={cls.input}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid="ProfileCard.City"
            />

            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />

            <Input
                value={data?.avatar}
                placeholder={t('Ссылка на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
        </VStack>
    );
};
