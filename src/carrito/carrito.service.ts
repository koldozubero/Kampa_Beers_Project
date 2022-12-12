import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Carrito, CarritoDocument, idProductos } from './carrito.schema';
import { CarritoDto } from './dto/carrito.dto/carrito.dto';

@Injectable()
export class CarritoService {
    constructor(
        @InjectModel(Carrito.name) private carritoModel: Model<CarritoDocument>
    ) { }

    async getCarritos(): Promise<Carrito[]> {
        return await this.carritoModel.find();
    }


    async getCarrito(idUsuario): Promise<Carrito[]> {
        return await this.carritoModel.find({ idUsuario });
    }

    async create(body: CarritoDto) {
        let productosAnadidosUser = body.idProductos[0]
        let carritoBBDD: any = (await this.getCarrito(body.idUsuario))
        if (carritoBBDD.length > 0) {
            let index = -1
            let newObj = {...carritoBBDD[0]["_doc"]}
            newObj.idProductos.forEach( (cBBDD, i) => {
                if (productosAnadidosUser.id == cBBDD.id) {
                    index = i
                }
            });
            if (index != -1) {
                newObj.idProductos[index].cantidad += productosAnadidosUser.cantidad
            } else {
                newObj.idProductos.push(productosAnadidosUser)
            }

            await this.carritoModel.collection.updateOne({ id: newObj.id }, { $set: { idProductos: newObj.idProductos }});
        } else {
            let carrito = await this.getCarritos()
            let id: number = carrito.length > 0 ? (carrito[carrito.length - 1].id + 1) : 1

            let newBody = { id, idUsuario: body.idUsuario, idProductos: [{ id: body.idProductos[0].id, cantidad: body.idProductos[0].cantidad }] }

            await this.carritoModel.collection.insertOne(newBody)
        }
        return {msg: "ok"}
    }

    async delete(idUsuario) {
        return await this.carritoModel.deleteMany({idUsuario});
    }
}
