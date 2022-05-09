import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ProductModel {
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop()
    category: string;
    
    @Prop()
    imageUrl: string;

    @Prop()
    createdDate: Date;

    @Prop()
    updatedDate: Date;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);