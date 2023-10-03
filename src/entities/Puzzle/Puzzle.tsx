import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './Puzzle.module.scss';

interface PuzzleProps {
    className?: string;
}

export const Puzzle = (props: PuzzleProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const [tiles, setTiles] = useState<number[]>([]);
    const [emptyTileIndex, setEmptyTileIndex] = useState<number>(15);

    const shuffleTiles = () => {
        const tileValues = Array.from({ length: 16 }, (_, i) => i + 1);
        for (let i = tileValues.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [tileValues[i], tileValues[j]] = [tileValues[j], tileValues[i]];
        }
        setTiles(tileValues);
        setEmptyTileIndex(tileValues.indexOf(16));
    };

    useEffect(() => {
        shuffleTiles();
    }, []);

    const canMoveTile = (tileIndex: number) => {
        const row = Math.floor(tileIndex / 4);
        const col = tileIndex % 4;
        const emptyRow = Math.floor(emptyTileIndex / 4);
        const emptyCol = emptyTileIndex % 4;
        return (
            (row === emptyRow && Math.abs(col - emptyCol) === 1)
            || (col === emptyCol && Math.abs(row - emptyRow) === 1)
        );
    };

    const handleTileClick = (index: number) => {
        if (canMoveTile(index)) {
            const newTiles = [...tiles];
            [newTiles[index], newTiles[emptyTileIndex]] = [newTiles[emptyTileIndex], newTiles[index]];
            setTiles(newTiles);
            setEmptyTileIndex(index);
        }
    };
    const renderTile = (index: number) => {
        const tileValue = tiles[index];
        const isEmptyTile = tileValue === 16;
        const tileClassName = `cls.tile ${isEmptyTile ? 'cls.emptyTile' : 'cls.tile'}`;

        return (
            <Button
                size={ButtonSize.L}
                theme={ButtonTheme.OUTLINE}
                key={index}
                className={classNames(`${tileClassName}`, {}, [className])}
                onClick={() => handleTileClick(index)}
            >
                {!isEmptyTile && tileValue}
            </Button>
        );
    };

    const renderTiles = () => {
        const renderedTiles = [];
        for (let i = 0; i < 16; i += 1) {
            renderedTiles.push(renderTile(i));
        }
        return renderedTiles;
    };

    return (
        <div className={cls.puzzleContainer}>{renderTiles()}</div>
    );
};
