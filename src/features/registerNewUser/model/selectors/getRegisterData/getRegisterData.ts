import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegisterUsername = (state: StateSchema) => state.registerUser?.username ?? '';
export const getRegisterPassword = (state: StateSchema) => state.registerUser?.password ?? '';
export const getRegisterAvatar = (state: StateSchema) => state.registerUser?.avatar ?? '';
export const getRegisterRoles = (state: StateSchema) => state.registerUser?.roles ?? 'USER';
