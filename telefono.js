"use strict";
/*Archivo para crear la clase Teléfono.

Creamos los atributos que van a componer esta clase y también el método
constructor asociado a cada uno de los atributos.

Originariamente había puesto en numero: number, pero en el paso de main
me da error, así que lo he tenido que pasar todo a strings.

Configuramos los métodos get y set para cada uno de los atributos. En
el caso de get, queremos que nos devuelva el atributo per se.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.telefono = void 0;
class telefono {
    constructor(_tipo, _numero) {
        this._tipo = _tipo;
        this._numero = _numero;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    /*Esto lo necesitamos para que nos cree espacios en console.log() y
    no se quede todo junto.*/
    getTelefonoArray() {
        return [this._tipo + ', ' + this._numero];
    }
}
exports.telefono = telefono;
