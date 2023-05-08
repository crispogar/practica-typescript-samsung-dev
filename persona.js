"use strict";
/*Archivo para crear la clase Persona.

Creamos los atributos que van a componer esta clase y también el método
constructor asociado a cada uno de los atributos.

Originariamente había puesto en edad: number, pero en el paso de main
me da error, así que lo he tenido que pasar todo a strings.

Configuramos los métodos get y set para cada uno de los atributos. En
el caso de get, queremos que nos devuelva el atributo per se.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
class persona {
    cambiarTelefono(_telefono4Array) { }
    cambiarMail(_mail4Array) { }
    cambiarDireccion(_direccion4Array) { }
    ;
    constructor(_nombre, _apellidos, _edad, _dni, _cumpleanos, _colorFavorito, _sexo, _direcciones, _mails, _telefonos, _notas) {
        this._nombre = _nombre;
        this._apellidos = _apellidos;
        this._edad = _edad;
        this._dni = _dni;
        this._cumpleanos = _cumpleanos;
        this._colorFavorito = _colorFavorito;
        this._sexo = _sexo;
        this._direcciones = _direcciones;
        this._mails = _mails;
        this._telefonos = _telefonos;
        this._notas = _notas;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    get apellidos() {
        return this._apellidos;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set dni(dni) {
        this._dni = dni;
    }
    get dni() {
        return this._dni;
    }
    set cumpleanos(cumpleanos) {
        this._cumpleanos = cumpleanos;
    }
    get cumpleanos() {
        return this._cumpleanos;
    }
    set colorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
    set direcciones(direcciones) {
        this._direcciones = direcciones;
    }
    get direcciones() {
        return this._direcciones;
    }
    set mails(mails) {
        this._mails = mails;
    }
    get mails() {
        return this._mails;
    }
    set telefonos(telefonos) {
        this._telefonos = telefonos;
    }
    get telefonos() {
        return this._telefonos;
    }
    set notas(notas) {
        this._notas = notas;
    }
    get notas() {
        return this._notas;
    }
}
exports.persona = persona;
