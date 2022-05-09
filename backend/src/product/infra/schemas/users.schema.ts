import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UsersModel {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    deleted: boolean;
}

export const UsersSchema = SchemaFactory.createForClass(UsersModel);