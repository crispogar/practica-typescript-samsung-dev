/*Archivo para crear la clase Mail.

Creamos los atributos que van a componer esta clase y también el método
constructor asociado a cada uno de los atributos.

Configuramos los métodos get y set para cada uno de los atributos. En
el caso de get, queremos que nos devuelva el atributo per se.*/

export class mail {
    constructor(public _tipo: string, public _direccion: string)
{}

    set tipo (tipo: string)
    {
        this._tipo = tipo;
    }
    get tipo()
    {
        return this._tipo
    }

    set direccion (direccion: string)
    {
        this._direccion = direccion;
    }
    get direccion()
    {
        return this._direccion
    }

/*Esto lo necesitamos para que nos cree espacios en console.log() y
no se quede todo junto.*/

getMailArray() { 
    return [this._tipo +', '+ this._direccion];
      }
}

/*Para poder crear un módulo principal con todas las clases es necesario
que todas sean export e import. En este caso, importamos Persona,
Dirección y Teléfono, y exportamos Mail.*/

import { persona } from './persona';
import { direccion } from './direccion';
import { telefono } from './telefono'