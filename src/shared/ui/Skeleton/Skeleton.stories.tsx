import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    width: 400,
    height: 200,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];
export const Dark = Template.bind({});
Dark.args = {
    width: 400,
    height: 200,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Perfect = Template.bind({});
Perfect.args = {
    width: 400,
    height: 200,
};
Perfect.decorators = [ThemeDecorator(Theme.PERFECT)];
export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
Circle.decorators = [ThemeDecorator(Theme.DARK)];
