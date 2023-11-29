import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'text_primary',
    ERROR = 'error_text'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}
export enum TextSize {
    S = 'size_s',
    L = 'size_l',
    M = 'size_m',
}
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}
type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        size = TextSize.M,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [className, cls[theme]])}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    data-testid={`${dataTestId}.Paragraph`}
                    className={cls.text}
                >
                    {text}
                </p>
            )}
        </div>
    );
};
