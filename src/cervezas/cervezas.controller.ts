import { Controller, Get, HttpStatus, Param, ParseIntPipe, Res, UseGuards } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { Cerveza } from './cerveza.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('cervezas')
export class CervezasController {
    constructor(private readonly cervezasService:CervezasService){};

    @UseGuards(JwtAuthGuard)
    @Get()
    async getCervezas(@Res() res: any) : Promise<Cerveza[]> {
        if (await this.cervezasService.getCervezas()!=undefined) {
            return res.status(HttpStatus.OK).send(await this.cervezasService.getCervezas());
        } else {
            return res.status(HttpStatus.BAD_REQUEST).send(`No hay cervezas`);
        }
    }

    @Get(":id")
    async getCerveza(@Res() res, @Param('id', new ParseIntPipe({errorHttpStatusCode: 406})) id: number): Promise<Cerveza> {
        if (await this.cervezasService.getCerveza(id)!=undefined) {
            return res.status(HttpStatus.OK).send(await this.cervezasService.getCerveza(id));
          } else {
            return res.status(HttpStatus.BAD_REQUEST).send(`No hay esa cerveza con el id ${id}`);
          }

    }
}
