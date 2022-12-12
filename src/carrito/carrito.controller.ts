import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { Carrito } from './carrito.schema';
import { CarritoService } from './carrito.service';
import { CarritoDto } from './dto/carrito.dto/carrito.dto';

@Controller('carrito')
export class CarritoController {

    constructor(private readonly carritoService:CarritoService){};

    @Get(":idUsuario")
    async getCarrito(@Res() res: any, @Param("idUsuario", new ParseIntPipe({errorHttpStatusCode: 406}) )idUsuario: number) : Promise<Carrito[]> {
        return res.status(HttpStatus.OK).send(await this.carritoService.getCarrito(idUsuario));
    }

    @Post()
    async create(@Res() res, @Body()body: CarritoDto): Promise<void> {
        return res.status(HttpStatus.OK).send(await this.carritoService.create(body));
    }

    @Delete(":idUsuario")
    async delete(@Res() res: any, @Param("idUsuario", new ParseIntPipe({errorHttpStatusCode: 406}) )idUsuario: number): Promise<void> {
            return res.status(HttpStatus.OK).send(await this.carritoService.delete(idUsuario));
    }
}
