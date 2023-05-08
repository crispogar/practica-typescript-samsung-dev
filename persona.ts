/*Archivo para crear la clase Persona.

Creamos los atributos que van a componer esta clase y también el método
constructor asociado a cada uno de los atributos.

Originariamente había puesto en edad: number, pero en el paso de main
me da error, así que lo he tenido que pasar todo a strings.

Configuramos los métodos get y set para cada uno de los atributos. En
el caso de get, queremos que nos devuelva el atributo per se.*/

export class persona {
    cambiarTelefono(_telefono4Array: telefono) {}
    cambiarMail(_mail4Array: mail) {}
    cambiarDireccion(_direccion4Array: direccion) {};
    
    constructor(public _nombre: string, public _apellidos: string,
    public _edad: string, public _dni: string,
    public _cumpleanos: string, public _colorFavorito: string,
    public _sexo: string, public _direcciones: string,
    public _mails: string, public _telefonos: string,
    public _notas: string)
{}

    set nombre(nombre: string)
    {
        this._nombre = nombre;
    }
    get nombre()
    {
        return this._nombre
    }

    set apellidos(apellidos: string)
    {
        this._apellidos = apellidos;
    }
    get apellidos()
    {
        return this._apellidos
    }

    set edad(edad: string)
    {
        this._edad = edad;
    }
    get edad()
    {
        return this._edad
    }

    set dni(dni: string)
    {
        this._dni = dni;
    }
    get dni()
    {
        return this._dni
    }

    set cumpleanos(cumpleanos: string)
    {
        this._cumpleanos = cumpleanos;
    }
    get cumpleanos()
    {
        return this._cumpleanos
    }

    set colorFavorito(colorFavorito: string)
    {
        this._colorFavorito = colorFavorito;
    }
    get colorFavorito()
    {
        return this._colorFavorito
    }

    set sexo(sexo: string)
    {
        this._sexo = sexo;
    }
    get sexo()
    {
        return this._sexo
    }

    set direcciones(direcciones: string)
    {
        this._direcciones = direcciones;
    }
    get direcciones()
    {
        return this._direcciones
    }

    set mails(mails: string)
    {
        this._mails = mails;
    }
    get mails()
    {
        return this._mails
    }

    set telefonos(telefonos: string)
    {
        this._telefonos = telefonos;
    }
    get telefonos()
    {
        return this._telefonos
    }

    set notas(notas: string)
    {
        this._notas = notas;
    }
    get notas()
    {
        return this._notas
    }

}

/*Para poder crear un módulo principal con todas las clases es necesario
que todas sean export e import. En este caso, importamos Dirección,
Teléfono e Email, y exportamos Persona.*/

import { direccion } from './direccion';
import { telefono } from './telefono';
import { mail } from './mail'