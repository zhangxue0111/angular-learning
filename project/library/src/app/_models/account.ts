import { Role } from "./role";

export interface Account {
    id: string;
    username: string;
    email: string;
    password: string;
    role: Role;
}