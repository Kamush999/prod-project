import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
// import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text/Text';
// import { ArticleEdit } from 'entities/Article';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    // const { id } = useParams<{ id: string }>();
    const cn = classNames(cls.ArticleEditPage, {}, [className]);

    return (
        <Page className={cn}>
            {/* TODO add editor widget */}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Text text="New article" />

            {/* {!id ? <Text text="New article" /> : <ArticleEdit /> } */}
        </Page>
    );
};

export default ArticleEditPage;
