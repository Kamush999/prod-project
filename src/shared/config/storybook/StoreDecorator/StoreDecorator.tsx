import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import {
    ReducersList,
} from 'shared/lib/components/DynamicsModuleLoader/DynamicModuleLoader';
import {
    articleDetailsReducer,
} from 'entities/Article/model/slice/articleDetailsSlice';
import {
    addNewCommentReducer,
} from 'features/addNewComment/model/slices/addNewCommentSlice';
import {
    articleDetailsCommentsReducer,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewComments: addNewCommentReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        initialState={state}
    >
        <StoryComponent />
    </StoreProvider>
);
