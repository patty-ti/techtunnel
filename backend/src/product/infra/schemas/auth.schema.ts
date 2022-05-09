import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class AuthModel {
    @Prop()
    id: number;

    @Prop()
    username: string;

    @Prop()
    password: string;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);