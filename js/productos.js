class Joya {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.img = `./images/productos/${nombre.toLowerCase()}.jpg`
    }
};

const joyas = [
    new Joya('Abridor Strass Blanco', '10500', 'aritos'),
    new Joya('Abridor Strass Rojo', '10500', 'aritos'),
    new Joya('Abridor Strass Verde', '10500', 'aritos'),
    new Joya('Abridor Strass Rosa', '10500', 'aritos'),
    new Joya('Abridor Strass Negro', '10500', 'aritos'),
    new Joya('Abridor Strass Celeste', '10500', 'aritos'),
    new Joya('Cubano Azul', '14000', 'dijes'),
    new Joya('Cubano Rojo', '14000', 'dijes'),
    new Joya('Cubano Rosa', '14000', 'dijes'),
    new Joya('Cubano Verde', '14000', 'dijes'),
    new Joya('Cubano Negro', '14000', 'dijes'),
    new Joya('Cubano Cubic Blanco', '17750', 'dijes'),
    new Joya('Pulcera Cubic Amarillo', '32000', 'pulceras'),
    new Joya('Pulcera Cubic Blanco', '32000', 'pulceras'),
    new Joya('Pulcera Cubic Rosa', '32000', 'pulceras'),
    new Joya('Pulcera Cubic Violeta', '32000', 'pulceras'),
    new Joya('Pulcera Bolita de Plata', '33250', 'pulceras')
];

class Compra {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.img = `./images/productos/${nombre.toLowerCase()}.jpg`
    }
};

const carrito = [

];

const carrito_JSON = JSON.stringify(carrito);

localStorage.setItem('carrito', carrito_JSON);