/*Archivo para crear la clase Teléfono.

Creamos los atributos que van a componer esta clase y también el método
constructor asociado a cada uno de los atributos.

Originariamente había puesto en numero: number, pero en el paso de main
me da error, así que lo he tenido que pasar todo a strings.

Configuramos los métodos get y set para cada uno de los atributos. En
el caso de get, queremos que nos devuelva el atributo per se.*/

export class telefono {
    constructor(public _tipo: string, public _numero: string)
{}

set tipo (tipo: string)
{
    this._tipo = tipo;
}
get tipo()
{
    return this._tipo
}

set numero (numero: string)
{
    this._numero = numero;
}
get numero()
{
    return this._numero
}

/*Esto lo necesitamos para que nos cree espacios en console.log() y
no se quede todo junto.*/

getTelefonoArray() { 
    return [this._tipo +', '+ this._numero];
  }
}

/*Para poder crear un módulo principal con todas las clases es necesario
que todas sean export e import. En este caso, importamos Persona,
Dirección e Email, y exportamos Teléfono.*/

import { persona } from './persona';
import { direccion } from './direccion';
import { mail } from './mail'