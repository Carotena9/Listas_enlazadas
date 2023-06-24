/* Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia. */


function insertarSinRepetidos(lista, dato) {
    if (!lista.includes(dato)) {
      lista.push(dato);
    }
  }
  

  var lista = [1, 2, 3, 4, 5];
  console.log('Lista original:', lista);
  
  insertarSinRepetidos(lista, 3); // El dato 3 ya está en la lista, no se inserta
  insertarSinRepetidos(lista, 6); // El dato 6 no está en la lista, se inserta
  console.log('Lista después de la inserción:', lista);
  
  /*Escribir un programa para formar una lista que realice las siguientes tareas:
Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
Mostrar todos los Nodos que superen un valor determinado. */

function Nodo(dato) {
    this.dato = dato;
    this.siguiente = null;
  }
  
  function ListaEnlazada() {
    this.cabeza = null;
    this.insertar = function (dato) {
      var nuevoNodo = new Nodo(dato);
      if (this.cabeza === null) {
        this.cabeza = nuevoNodo;
      } else {
        var actual = this.cabeza;
        while (actual.siguiente !== null) {
          actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
      }
    };
    this.mostrarSuperiores = function (valor) {
      var actual = this.cabeza;
      var nodosSuperiores = [];
      while (actual !== null) {
        if (actual.dato > valor) {
          nodosSuperiores.push(actual.dato);
        }
        actual = actual.siguiente;
      }
      return nodosSuperiores;
    };
  }
  
  // Crear una lista enlazada con números enteros positivos al azar
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var listaEnlazada = new ListaEnlazada();
  for (var i = 0; i < 10; i++) {
    var numeroAleatorio = generarNumeroAleatorio(1, 100);
    listaEnlazada.insertar(numeroAleatorio);
  }
  
  // Mostrar todos los nodos que superen un valor determinado
  var valorDeterminado = 50;
  var nodosSuperiores = listaEnlazada.mostrarSuperiores(valorDeterminado);
  console.log('Nodos superiores a', valorDeterminado + ':', nodosSuperiores);
  