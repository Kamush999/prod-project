import React, { Fragment, InputHTMLAttributes, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface ListBoxProps extends HTMLInputProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        placeholder,
        direction = 'bottom right',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];
    const isMobile = useDevice();

    if (isMobile) {
        return (
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                {placeholder && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )}
                <HStack>
                    <HListBox.Button className={popupCls.trigger}>
                        <Button disabled={readonly}>
                            {value ?? defaultValue}
                        </Button>
                    </HListBox.Button>
                </HStack>

                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (

                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },

                                    )}
                                >
                                    {selected && '✔'}
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>

                    ))}
                </HListBox.Options>
            </HListBox>
        );
    }

    return (
        <HListBox
            as="div"
            className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
            value={value}
            onChange={onChange}
            disabled={readonly}
        >
            <HStack>
                {placeholder && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )}
                <HListBox.Button className={popupCls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
            </HStack>

            <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                {items?.map((item) => (

                    <HListBox.Option
                        key={item.value}
                        value={item.value}
                        as={Fragment}
                        disabled={item.disabled}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(
                                    cls.item,
                                    {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    },

                                )}
                            >
                                {selected && '✔'}
                                {item.content}
                            </li>
                        )}

                    </HListBox.Option>

                ))}
            </HListBox.Options>
        </HListBox>
    );
}
