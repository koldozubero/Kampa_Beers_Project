import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { CarritoService } from './carrito/carrito.service';
import { ComprasService } from './compras/compras.service';
import { CervezasService } from './cervezas/cervezas.service';
import { UsersController } from './users/users.controller';
import { CarritoController } from './carrito/carrito.controller';
import { ComprasController } from './compras/compras.controller';
import { CervezasController } from './cervezas/cervezas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Carrito, CarritoSchema } from './carrito/carrito.schema';
import { Cerveza, CervezaSchema } from './cervezas/cerveza.schema';
import { Compra, CompraSchema } from './compras/compra.schema';
import { User, UserSchema } from './users/user.schema';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/kampa_beers"), 
    MongooseModule.forFeature([
    {
      name: Carrito.name,
      schema: CarritoSchema
    },{
      name: Cerveza.name,
      schema: CervezaSchema
    },{
      name: Compra.name,
      schema: CompraSchema
    },{
      name: User.name,
      schema: UserSchema
    }
    ]), AuthModule, UsersModule
  ],
  controllers: [AppController, UsersController, CarritoController, ComprasController, CervezasController],
  providers: [AppService, UsersService, CarritoService, ComprasService, CervezasService],
})
export class AppModule {}
