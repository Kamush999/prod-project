import { Button } from 'widgets/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCounterValue,
} from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1>
                value =
                {counterValue}
            </h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={increment}>
                increment
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};
