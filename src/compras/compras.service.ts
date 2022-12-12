import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Compra, CompraDocument } from './compra.schema';
import { ComprasDto } from './dto/compras.dto/compras.dto';

@Injectable()
export class ComprasService {

    constructor(
        @InjectModel(Compra.name) private compraModel: Model<CompraDocument>
    ) { }

    async getCompras(): Promise<Compra[]> {
        return await this.compraModel.find();
    }

    async getCompra(idUsuario): Promise<Compra[]> {
        return await this.compraModel.find({ idUsuario });
    }

    async create(body: ComprasDto){
        let compras: any = (await this.getCompras())
        let id: number = compras.length > 0 ? (compras[compras.length - 1].id + 1) : 1     
        let newBody = {id,...body}
        await this.compraModel.collection.insertOne(newBody)
        return await this.compraModel.find()
      }

}
