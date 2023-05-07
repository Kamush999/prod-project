import { StateSchema } from 'app/providers/StoreProvider';

export const addNewCommentText = (state: StateSchema) => state.addNewComments?.text;
export const addNewCommentError = (state: StateSchema) => state.addNewComments?.error;
