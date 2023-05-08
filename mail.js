"use strict";
/*Archivo para crear la clase Mail.

Creamos los atributos que van a componer esta clase y también el método
constructor asociado a cada uno de los atributos.

Configuramos los métodos get y set para cada uno de los atributos. En
el caso de get, queremos que nos devuelva el atributo per se.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;
class mail {
    constructor(_tipo, _direccion) {
        this._tipo = _tipo;
        this._direccion = _direccion;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    get direccion() {
        return this._direccion;
    }
    /*Esto lo necesitamos para que nos cree espacios en console.log() y
    no se quede todo junto.*/
    getMailArray() {
        return [this._tipo + ', ' + this._direccion];
    }
}
exports.mail = mail;
