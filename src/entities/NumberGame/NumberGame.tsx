import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Puzzle } from 'entities/Puzzle/Puzzle';

interface NumberGameProps {
    className?: string;
}

export const NumberGame = memo((props: NumberGameProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <Puzzle />
        </div>
    );
});
