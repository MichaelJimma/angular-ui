import { User } from './user';

export interface Role {
    id: string;
    name: string;
    key: string;
    user: User[];
}
