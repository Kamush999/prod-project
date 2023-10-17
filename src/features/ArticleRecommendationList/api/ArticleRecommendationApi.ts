import { rtkApi } from 'shared/api/rtkApi';

const recommendationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
        // createArticleRecommendation: build.mutation({
        //     query: (limit) => ({
        //         url: '/articles',
        //         params: {
        //             _limit: limit,
        //         },
        //         method: 'POST',
        //     }),
        // }),
        // TODO создание профиля, юзера
    }),
});

export const useArticleRecommendationList = recommendationApi.useGetArticleRecommendationListQuery;
// export const useCreateRecommendation = recommendationApi.useCreateArticleRecommendationMutation;
