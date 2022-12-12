import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Compra } from './compra.schema';
import { ComprasService } from './compras.service';
import { ComprasDto } from './dto/compras.dto/compras.dto';

@Controller('compras')
export class ComprasController {

    constructor(private readonly compraService:ComprasService){};

    @Get(":idUsuario")
    async getCompras(@Res() res: any, @Param("idUsuario", new ParseIntPipe({errorHttpStatusCode: 406}) )idUsuario: number) : Promise<Compra[]> {
        return res.status(HttpStatus.OK).send(await this.compraService.getCompra(idUsuario));
    }

    @Post()
    async create(@Res() res, @Body()body: ComprasDto): Promise<void> {
        console.log(body);
        return res.status(HttpStatus.OK).send(await this.compraService.create(body));
    }


}
