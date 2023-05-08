/*Se hace necesario crear un archivo main para crear lo que será
nuestra agenda. Es por ello que cargamos las cuatro clases
(persona, direccion, telefono, mail para poder trabajar con ellas.*/

import { persona } from './persona';
import { direccion } from './direccion';
import { telefono } from './telefono';
import { mail } from './mail';
  
/*Se nos pide crear tres registros para distintas personas. Me da
error cuando los atributos son genéricamente numbers, así que lo he
tenido que pasar todo a strings, tanto en este apartado como en los
anteriores.*/

/*Creamos los campos para Persona 1.*/

const direccion1 = new direccion
    ('Avenida de la Lavanda', '14', '1', 'D', '29539', 'Arcoiris',
    'Colorandia')

const direccion1Array = direccion1.getDireccionArray();
    
const mail1 = new mail 
    ('Personal', 'violetasmail@colorandia.es')

const mail1Array = mail1.getMailArray();

const telefono1 = new telefono
    ('Privado', '123456789')

const telefono1Array = telefono1.getTelefonoArray();

const persona1 = new persona ('Violeta', 'Morado Púrpura', '28',
    '12345678A', '08-04-1995', 'Violeta', 'Mujer', direccion1Array.toString(),
    mail1Array.toString(), telefono1Array.toString(), 'Disponible 24/7')

/*Persona 2.*/

const direccion2 = new direccion
    ('Calle del Río Bravo', '10', '2', 'A', '29538', 'Arcoiris',
    'Colorandia')

const direccion2Array = direccion2.getDireccionArray();

const mail2 = new mail
    ('Personal', 'celestesmail@colorandia.es')

const mail2Array = mail2.getMailArray();

const telefono2 = new telefono
    ('Empresarial', '234567891')

const telefono2Array = telefono2.getTelefonoArray();

const persona2 = new persona ('Celeste', 'Azul Marino', '40',
    '23456789B', '27-01-1983', 'Azul', 'Hombre', direccion2Array.toString(),
    mail2Array.toString(), telefono2Array.toString(), 'Molestar si es urgente')

/*Persona 3.*/

const direccion3 = new direccion
    ('Travesía de la Rosa salvaje', '13', '5', 'C', '29537',
    'Arcoiris', 'Colorandia')

const direccion3Array = direccion3.getDireccionArray();

const mail3 = new mail
    ('Personal', 'rosasmail@colorandia.es')

const mail3Array = mail3.getMailArray();

const telefono3 = new telefono
    ('Personal', '345678912')

const telefono3Array = telefono3.getTelefonoArray();

const persona3 = new persona ('Rosa', 'Fucsia Magenta', '18',
    '34567891C', '25-03-2005', 'Rosa', 'Mujer', direccion3Array.toString(),
    mail3Array.toString(), telefono3Array.toString(),
    'Nunca sabe dónde tiene el móvil')

/*También se pide que mostremos estos datos en el terminal
mediante console.log. antes de ejecutar más cambios.*/

console.log("Información de: ");
console.log(persona1);
console.log(persona2);
console.log(persona3)

/*Se va a modificar partes de la información de una de las personas
ya creadas (en este caso, de persona1). Para ello, se buscará el
DNI de la persona y se añadirá una nueva dirección, un nuevo mail
y un nuevo teléfono.

Antes de nada, juntamos a todas las personas en una sola variable
para iniciar la búsqueda.*/

const agenda: persona[] = [persona1, persona2, persona3]

function actualizarPersonaPorDNI(
    agenda: persona[],
    dni: string,
    direccionNueva: string,
    telefonoNuevo: string,
    mailNuevo: string
  ): void {
    const personaActualizar = agenda.find((persona) => persona.dni === dni);
    if (personaActualizar) {
        personaActualizar.direcciones = direccionNueva;
        personaActualizar.telefonos = telefonoNuevo;
        personaActualizar.mails = mailNuevo;
    }
  }

/*Creamos los nuevos cambios que se van a modificar. Los ponemos como Array
para que luego en la consola no salga como [Object, object], sino que salga
todo completo.*/

const direccionNueva = new direccion
  ('Glorieta del Jacinto', '20', '5', 'B', '29539', 'Arcoiris',
  'Colorandia')

const direccionNuevaArray = direccionNueva.getDireccionArray();

const mailNuevo = new mail 
  ('Privado', 'violetasdeverdadmail@colorandia.es')

const mailNuevoArray = mailNuevo.getMailArray();

const telefonoNuevo = new telefono
  ('Privado', '123456799')

const telefonoNuevoArray = telefonoNuevo.getTelefonoArray();

/*Actualizamos la agenda con los nuevos campos.*/

actualizarPersonaPorDNI(agenda, "12345678A", direccionNuevaArray.toString(),
    mailNuevoArray.toString(), telefonoNuevoArray.toString());

/*Comprobamos que todo se ve correctamente directamente con la agenda.*/

console.log(agenda);
 