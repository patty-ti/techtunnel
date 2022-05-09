import { AutoMap } from "@automapper/classes";

export class Auth {
    @AutoMap()
    id: number;

    @AutoMap()
    email: string;
    
    @AutoMap()
    password: string;
}