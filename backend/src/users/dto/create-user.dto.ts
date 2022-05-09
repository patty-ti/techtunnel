import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @AutoMap()
    @ApiProperty()
    email: string;
    
    @AutoMap()
    @ApiProperty()
    password: string;
}