import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cerveza, CervezaDocument } from './cerveza.schema';

@Injectable()
export class CervezasService {

    constructor(
        @InjectModel(Cerveza.name) private cervezasModel: Model<CervezaDocument>
    ){}

    async getCervezas(): Promise<Cerveza[]> {
        return await this.cervezasModel.find();
    }

    async getCerveza(id: number): Promise<Cerveza>{
        return await this.cervezasModel.findOne({id});
    }

}

