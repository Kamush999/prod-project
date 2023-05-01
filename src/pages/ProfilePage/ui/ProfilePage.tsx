import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicsModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}
const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames('', {}, [className])}>
                {t('Страница профиля')}
            </div>
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;