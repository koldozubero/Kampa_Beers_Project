import { IsInt } from "class-validator"

export class idProductosDto {
    @IsInt({message: "El campo id tiene que ser en formato number"})
    id: number

    @IsInt({message: "El campo cantidad tiene que ser en formato number"})
    cantidad: number
}
export class CarritoDto {
    @IsInt({message: "El campo id tiene que ser en formato number"})
    id: number

    @IsInt({message: "El campo idUsuario name tiene que ser de formato number"})
    idUsuario: number

    @IsInt({message: "El campo idProductos name tiene que ser de formato Array<number>"})
    idProductos: Array<idProductosDto>

}

