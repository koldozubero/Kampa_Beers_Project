import { IsString, IsInt } from "class-validator"

export class ComprasDto {

    @IsInt({message: "El campo id tiene que ser en formato number"})
    id: number

    @IsInt({message: "El campo idUsuario tiene que ser de formato number"})
    idUsuario: number

    @IsInt({message: "El campo fecha tiene que ser de formato Array<number>"})
    fecha: string

    @IsInt({message: "El campo precioTotal tiene que ser de formato number"})
    precioTotal: number
    
}
