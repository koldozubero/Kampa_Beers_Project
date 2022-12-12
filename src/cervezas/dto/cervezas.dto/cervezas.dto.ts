import { IsString, IsInt } from "class-validator"

export class CervezasDto {

    @IsInt({message: "El campo id tiene que ser en formato number"})
    id: number

    @IsString({message: "El campo nombre tiene que ser de formato string"})
    nombre: string

    @IsString({message: "El campo estilo  tiene que ser de formato string"})
    estilo: string

    @IsInt({message: "El campo graduacion tiene que ser de formato number"})
    graduacion: number
    
    @IsString({message: "El campo levadura tiene que ser de formato string"})
    levadura: string

    @IsString({message: "El campo descripcion tiene que ser de formato string"})
    descripcion: string

    @IsInt({message: "El campo precio_unidad tiene que ser de formato number"})
    precio_unidad: number

    @IsInt({message: "El campo precio_pack tiene que ser de formato number"})
    precio_pack: number

    @IsString({message: "El campo foto tiene que ser de formato string"})
    foto: string
}