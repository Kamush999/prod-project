import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import {
    EditableProfileCard,
} from '@/features/editableProfileCard';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';

interface ProfilePageProps {
    className?: string;
}
const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile-page');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <Text
                align={TextAlign.RIGHT}
                theme={TextTheme.ERROR}
                text={t('Произошла ошибка при загрузке профиля')}
            />
        );
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
