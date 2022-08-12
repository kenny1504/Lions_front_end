// import {Injectable} from "@angular/core";
//
// @Injectable()
export class product {
  public nombre: string;
  public precio: number;
  public existencia: number;
  public tipo: number;

  public constructor(Nombre: string, Precio: number, Existencia: number, Tipo: number){
    this.nombre = Nombre;
    this.precio= Precio;
    this.existencia= Existencia;
    this.tipo= Tipo;
  }
}
