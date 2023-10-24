import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { EditableProfileCard } from '../../ui';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 3333,
    city: 'test',
    username: 'admin',
    country: Country.KAZAKHSTAN,
    currency: Currency.KZT,
};
const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('switch readonly', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });
    test('if canceled values dont change', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Username'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.Username'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
        expect(screen.getByTestId('ProfileCard.Username')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
        expect(screen.getByTestId('ProfileCard.Username')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
    });
    test('must be error', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });
    test('if !error we have PUT request on server', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.type(screen.getByTestId('ProfileCard.Username'), 'user');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutReq).toHaveBeenCalled();
    });
});
