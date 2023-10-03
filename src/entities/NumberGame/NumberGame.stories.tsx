import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NumberGame } from './NumberGame';

export default {
    title: '',
    component: NumberGame,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NumberGame>;

const Template: ComponentStory<typeof NumberGame> = (args) => <NumberGame {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];
export const Perfect = Template.bind({});
Perfect.args = {};
Perfect.decorators = [ThemeDecorator(Theme.PERFECT)];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
