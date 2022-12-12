import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CervezaDocument = Cerveza & Document;

@Schema()
export class Cerveza {
    @Prop({unique: true, required: true})
    id: number;

    @Prop()
    nombre: string;

    @Prop()
    estilo: string;

    @Prop()
    graduacion: number;

    @Prop()
    levadura: string;

    @Prop()
    descripcion: string;

    @Prop()
    precio_unidad: number;

    @Prop()
    precio_pack: number;

    @Prop()
    foto: string;
}

export const CervezaSchema = SchemaFactory.createForClass(Cerveza);