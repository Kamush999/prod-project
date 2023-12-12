import { UserRole } from '@/entities/User';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    password?: string;
    roles: UserRole[];
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
