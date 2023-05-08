/*Archivo para crear la clase Direccion.

/*Creamos los atributos que van a componer esta clase y también el método
constructor asociado a cada uno de los atributos.

Originariamente había puesto en numero: number, pero en el paso de main
me da error, así que lo he tenido que pasar todo a strings.

Configuramos los métodos get y set para cada uno de los atributos. En
el caso de get, queremos que nos devuelva el atributo per se.*/

export class direccion {
    constructor(public _calle: string, public _numero: string,
        public _piso: string, public _letra: string,
        public _codigoPostal: string, public _poblacion: string,
        public _provincia: string)
{}

    set calle (calle: string)
    {
        this._calle = calle;
    }
    get calle()
    {
        return this._calle
    }

    set numero (numero: string)
    {
        this._numero = numero;
    }
    get numero()
    {
        return this._numero
    }

    set piso (piso: string)
    {
        this._piso = piso;
    }
    get piso()
    {
        return this._piso
    }

    set letra (letra: string)
    {
        this._letra = letra;
    }
    get letra()
    {
        return this._letra
    }

    set codigoPostal (codigoPostal: string)
    {
        this._codigoPostal = codigoPostal;
    }
    get codigoPostal()
    {
        return this._codigoPostal
    }

    set poblacion (poblacion: string)
    {
        this._poblacion = poblacion;
    }
    get poblacion()
    {
        return this._poblacion
    }

    set provincia (provincia: string)
    {
        this._provincia = provincia;
    }
    get provincia()
    {
        return this._provincia
    }

/*Esto lo necesitamos para que nos cree espacios en console.log() y
no se quede todo junto.*/

getDireccionArray() { 
    return [this._calle +', '+ this._numero +', '+ this._piso
    +', '+ this._letra  +', '+ this._codigoPostal  +', '+
    this._poblacion  +', '+ this._provincia];
  }
}

/*Para poder crear un módulo principal con todas las clases es necesario
que todas sean export e import. En este caso, importamos Persona,
Teléfono e Email, y exportamos Direccion.*/

import { persona } from './persona';
import { telefono } from './telefono';
import { mail } from './mail';