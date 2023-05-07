import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'widgets/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicsModuleLoader/DynamicModuleLoader';
import {
    addNewCommentActions, addNewCommentReducer,
} from '../../model/slices/addNewCommentSlice';
import {
    addNewCommentError,
    addNewCommentText,
} from '../../model/selectors/addNewCommentDataSelectors/addNewCommentDataSelectors';
import cls from './AddNewComment.module.scss';

export interface AddNewCommentProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddNewComment = memo((props: AddNewCommentProps) => {
    const { t } = useTranslation();
    const {
        className,
        onSendComment,
    } = props;
    const text = useSelector(addNewCommentText);
    const error = useSelector(addNewCommentError);
    const dispatch = useAppDispatch();
    const reducers: ReducersList = {
        addNewComments: addNewCommentReducer,
    };
    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addNewCommentActions.setText(value));
    }, [dispatch]);
    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddNewComment, {}, [className])}>
                <Input
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t('Введите новый комментарий')}
                />
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddNewComment;
