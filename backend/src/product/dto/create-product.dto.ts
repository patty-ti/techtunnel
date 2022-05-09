import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {  
    @AutoMap() 
    @ApiProperty() 
    title: string;
    @AutoMap()
    @ApiProperty() 
    description: string;
    @AutoMap()
    @ApiProperty() 
    price: number;
    @AutoMap()
    @ApiProperty() 
    category: string;
    @AutoMap()
    @ApiProperty() 
    imageUrl: string;
    
}
