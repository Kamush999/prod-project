import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities/Article';

const recommendationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query<Article[], number>({
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
