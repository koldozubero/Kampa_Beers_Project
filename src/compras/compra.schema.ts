import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CompraDocument = Compra & Document;

@Schema()
export class Compra {
    @Prop({unique: true, required: true})
    id: number;

    @Prop({required: true})
    idUsuario: number;

    @Prop()
    fecha: string;

    @Prop()
    precioTotal: number;
}

export const CompraSchema = SchemaFactory.createForClass(Compra);