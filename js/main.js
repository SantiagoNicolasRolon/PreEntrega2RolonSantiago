const productos = [
    { id: '01', nombre: 'Abridor estrella', color: 'plata', precio: 10500, categoria: 'aritos' },
    { id: '02', nombre: 'Pulcera doble piedra', color: 'blanco', precio: 32000, categoria: 'pulceras' },
    { id: '03', nombre: 'Cadena dige', color: 'rojo', precio: 45750, categoria: 'collares' },
    { id: '04', nombre: 'Abridor strass', color: 'rojo', precio: 9000, categoria: 'aritos' },
    { id: '05', nombre: 'Pulcera doble piedra', color: 'amarillo', precio: 32000, categoria: 'pulceras' },
    { id: '06', nombre: 'Abridor grifa', color: 'negro', precio: 11200, categoria: 'aritos' },
    { id: '07', nombre: 'Abridor strass', color: 'verde', precio: 9000, categoria: 'aritos' },
    { id: '08', nombre: 'Cadena dige', color: 'azul', precio: 45750, categoria: 'collares' },
    { id: '09', nombre: 'Abridor strass', color: 'azul', precio: 9000, categoria: 'aritos' },
    { id: '10', nombre: 'Abridor grifa', color: 'blanco', precio: 9000, categoria: 'aritos' },
    { id: '11', nombre: 'Pulcera letra y piedra', color: 'amarillo', precio: 33000, categoria: 'pulceras' },
    { id: '12', nombre: 'Abridor grifa', color: 'violeta', precio: 9000, categoria: 'aritos' },
    { id: '13', nombre: 'Cadena dige', color: 'verde', precio: 45750, categoria: 'collares' },
    { id: '14', nombre: 'Pulcera letra y piedra', color: 'blanco', precio: 33000, categoria: 'pulceras' },
];

const carrito = [];

const categoriasAritos = productos.filter((producto) => producto.categoria === 'aritos');
const categoriasPulceras = productos.filter((producto) => producto.categoria === 'pulceras');
const categoriasCollares = productos.filter((producto) => producto.categoria === 'collares');

function desplegarLista() {
    for (let o = 1; o <= 999; o++) {
        let busqueda = prompt('Bienvenido, escriba "Productos" para ver la lista de nuestros productos, escriba "Categorias" para agilizar su busqueda o escriba "Salir" para cancelar el proceso').toLocaleLowerCase();
        if (busqueda === 'productos') {
            console.table(productos)
        } else if (busqueda === 'salir') {
            console.log(`presione F5 para volver a comensar el proceso`);
        } else if (busqueda === 'categorias') {
            filtrarCategorias();
        } else if (busqueda === 'salir') {
            break;
        } else {
            alert('Escriba algo valido por favor')
            console.log('Escriba algo valido por favor')
            desplegarLista();
        }
    }
    function filtrarCategorias() {
        for (let x = 1; x <= 999; x++) {
            let filtrar = prompt(`Escriba una de las siguientes categorias: \n"Aritos" \n"Pulceras" \n"Collares" \n si ya quiere seleccionar el producto para comprar escriba "Continuar"`).toLocaleLowerCase();
            if (filtrar === 'aritos') {
                console.log('Categoria Aritos')
                console.table(categoriasAritos)
            } else if (filtrar === 'pulceras') {
                console.log('Categoria Pulceras')
                console.table(categoriasPulceras)
            } else if (filtrar === 'collares') {
                console.log('Categoria collares')
                console.table(categoriasCollares)
            } else if (filtrar === 'continuar') {
                agregarAlcarrito();
            } else if (filtrar === 'salir') {
                break;
            } else {
                alert('Escriba algo valido por favor')
                console.log('Escriba algo valido por favor')
                filtrarCategorias();
            }
        }
    };
    filtrarCategorias();
    function agregarAlcarrito() {
        for (let i = 1; i <= 999; i++) {
            let mover = prompt(`Escriba el nombre del producto con su respectivo color en caso de tenerlo que desee añadir al carrito de compras o si desea volver a ver nuevamente la lista escriba "Productos" en caso de que no desee continuar escriba "Salir" y si desea reiniciar el carrito escriba "Borrar".`).toLocaleLowerCase();
            if (mover === 'productos') {
                console.log(productos)
                filtrarCategorias();
            } else if (mover === 'abridor estrella plata') {
                carrito.push(productos[0])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'pulcera doble piedra blanco') {
                carrito.push(productos[1])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'pulcera doble piedra amarillo') {
                carrito.push(productos[4])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'pulcera letra y piedra amarillo') {
                carrito.push(productos[10])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'pulcera letra y piedra blanco') {
                carrito.push(productos[13])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'abridor strass rojo') {
                carrito.push(productos[3])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'abridor grifa negro') {
                carrito.push(productos[5])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'abridor strass verde') {
                carrito.push(productos[6])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'abridor strass azul') {
                carrito.push(productos[8])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'abridor grifa blanco') {
                carrito.push(productos[9])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'abridor grifa violeta') {
                carrito.push(productos[11])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'cadena dige rojo') {
                carrito.push(productos[2])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'cadena dige azul') {
                carrito.push(productos[7])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'cadena dige verde') {
                carrito.push(productos[12])
                console.log(`${mover} a sido agregado al carrito`)
                console.table(carrito)
            } else if (mover === 'borrar') {
                carrito.splice(0)
                console.log('El carrito a sido vaciado')
            } else if (mover === 'salir') {
                break;
            } else {
                alert('Escriba algo valido por favor')
                console.log('Escriba algo valido por favor')
                agregarAlcarrito()
            }
        }
    };
    agregarAlcarrito();
};
desplegarLista();