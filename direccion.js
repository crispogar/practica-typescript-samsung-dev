"use strict";
/*Archivo para crear la clase Direccion.

/*Creamos los atributos que van a componer esta clase y también el método
constructor asociado a cada uno de los atributos.

Originariamente había puesto en numero: number, pero en el paso de main
me da error, así que lo he tenido que pasar todo a strings.

Configuramos los métodos get y set para cada uno de los atributos. En
el caso de get, queremos que nos devuelva el atributo per se.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
class direccion {
    constructor(_calle, _numero, _piso, _letra, _codigoPostal, _poblacion, _provincia) {
        this._calle = _calle;
        this._numero = _numero;
        this._piso = _piso;
        this._letra = _letra;
        this._codigoPostal = _codigoPostal;
        this._poblacion = _poblacion;
        this._provincia = _provincia;
    }
    set calle(calle) {
        this._calle = calle;
    }
    get calle() {
        return this._calle;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    set piso(piso) {
        this._piso = piso;
    }
    get piso() {
        return this._piso;
    }
    set letra(letra) {
        this._letra = letra;
    }
    get letra() {
        return this._letra;
    }
    set codigoPostal(codigoPostal) {
        this._codigoPostal = codigoPostal;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }
    set poblacion(poblacion) {
        this._poblacion = poblacion;
    }
    get poblacion() {
        return this._poblacion;
    }
    set provincia(provincia) {
        this._provincia = provincia;
    }
    get provincia() {
        return this._provincia;
    }
    /*Esto lo necesitamos para que nos cree espacios en console.log() y
    no se quede todo junto.*/
    getDireccionArray() {
        return [this._calle + ', ' + this._numero + ', ' + this._piso
                + ', ' + this._letra + ', ' + this._codigoPostal + ', ' +
                this._poblacion + ', ' + this._provincia];
    }
}
exports.direccion = direccion;
