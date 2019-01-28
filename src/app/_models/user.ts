import { Role } from './role';
import { ValidationResult } from './validation-result';

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: Role;
    validationResult: ValidationResult;
    token: string;
}
