export const ArticleSortField = {
    VIEWS: 'views',
    TITLE: 'title',
    CREATED: 'createdAt',
    ALL: '',
} as const;

export const ArticleBlockTypes = {
    CODE: 'CODE',
    IMAGE: 'IMAGE',
    TEXT: 'TEXT',
} as const;

export const ArticleTypes = {
    ALL: 'ALL',
    IT: 'IT',
    SCIENCE: 'SCIENCE',
    ECONOMICS: 'ECONOMICS',
    HUMOR: 'HUMOR',
} as const;

export const ArticleView = {
    BIG: 'BIG',
    SMALL: 'SMALL',
} as const;
