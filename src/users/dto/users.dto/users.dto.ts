import { IsString, IsInt } from "class-validator"

export class UsersDto {

    @IsInt({message: "El campo id tiene que ser en formato number"})
    id: number

    @IsString({message: "El campo usuario tiene que ser de formato string"})
    username: string

    @IsString({message: "El campo contrasena tiene que ser de formato string"})
    password: string

}
