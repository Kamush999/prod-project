import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '@/entities/User';

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<User[], null>({
            query: () => ({
                url: '/users',
            }),
        }),
    }),
});

export const useUsers = userApi.useGetUsersQuery;
