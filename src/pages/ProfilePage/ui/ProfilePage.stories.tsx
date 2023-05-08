import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
    StoreDecorator,
} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.KAZAKHSTAN,
                lastname: 'Patrushev',
                first: 'Ilya',
                city: 'Almaty',
                currency: Currency.KZT,
                avatar: 'https://www.shutterstock.com/image-vector/horned-demon-head-vector-illustration-600w-2165765835.jpg',
            },
        },
    }),
];
export const Perfect = Template.bind({});
Perfect.args = {};
Perfect.decorators = [
    ThemeDecorator(Theme.PERFECT),
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.KAZAKHSTAN,
                lastname: 'Patrushev',
                first: 'Ilya',
                city: 'Almaty',
                currency: Currency.KZT,
                avatar: 'https://www.shutterstock.com/image-vector/horned-demon-head-vector-illustration-600w-2165765835.jpg',
            },
        },
    }),
];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.KAZAKHSTAN,
                lastname: 'Patrushev',
                first: 'Ilya',
                city: 'Almaty',
                currency: Currency.KZT,
                avatar: 'https://www.shutterstock.com/image-vector/horned-demon-head-vector-illustration-600w-2165765835.jpg',
            },
        },
    }),
];
