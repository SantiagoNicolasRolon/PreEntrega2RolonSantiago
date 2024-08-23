class Joya {
    constructor(id, nombre, precio, categoria, stock) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.img = `./images/productos/${nombre.toLowerCase()}.jpg`
        this.stock = stock
    }
};

const joyas = [
    new Joya(1, 'Abridor Strass Blanco', 10500, 'aritos', 1),
    new Joya(2, 'Abridor Strass Rojo', 10500, 'aritos', 1),
    new Joya(3, 'Abridor Strass Verde', 10500, 'aritos', 1),
    new Joya(4, 'Abridor Strass Rosa', 10500, 'aritos', 1),
    new Joya(5, 'Abridor Strass Negro', 10500, 'aritos', 1),
    new Joya(6, 'Abridor Strass Celeste', 10500, 'aritos', 1),
    new Joya(7, 'Cubano Azul', 14000, 'dijes', 1),
    new Joya(8, 'Cubano Rojo', 14000, 'dijes', 1),
    new Joya(9, 'Cubano Rosa', 14000, 'dijes', 1),
    new Joya(10, 'Cubano Verde', 14000, 'dijes', 1),
    new Joya(11, 'Cubano Negro', 14000, 'dijes', 1),
    new Joya(12, 'Cubano Cubic Blanco', 17750, 'dijes', 1),
    new Joya(13, 'Pulcera Cubic Amarillo', 32000, 'pulceras', 1),
    new Joya(14, 'Pulcera Cubic Blanco', 32000, 'pulceras', 1),
    new Joya(15, 'Pulcera Cubic Rosa', 32000, 'pulceras', 1),
    new Joya(16, 'Pulcera Cubic Violeta', 32000, 'pulceras', 1),
    new Joya(17, 'Pulcera Bolita de Plata', 33250, 'pulceras', 1)
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];