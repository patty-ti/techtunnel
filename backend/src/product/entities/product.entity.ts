import { AutoMap } from "@automapper/classes";

export class Product {
    @AutoMap()
    id: number;

    @AutoMap()
    title: string;

    @AutoMap()
    description: string;

    @AutoMap()
    price: number;

    @AutoMap()
    category: string;

    @AutoMap()
    imageUrl: string;

    createdDate: Date;
    updatedDate: Date;
}