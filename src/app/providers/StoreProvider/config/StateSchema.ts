import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/model';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
