import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CarritoDocument = Carrito & Document;

@Schema()

export class idProductos {

    @Prop()
    id: number;

    @Prop()
    cantidad: number;
}

export class Carrito {
    @Prop({unique: true, required: true})
    id: number;

    @Prop({required: true})
    idUsuario: number;

    @Prop()
    idProductos: Array<idProductos>;
}

export const CarritoSchema = SchemaFactory.createForClass(Carrito);
