
// INDEX //

const contenedor_articulos = document.querySelector('#articulos');

joyas.forEach((Joya) => {
    const copia = document.querySelector('template').content.cloneNode(true)

    copia.querySelector('h2').textContent = Joya.nombre
    copia.querySelector('img').src = Joya.img
    copia.querySelector('b').textContent += Joya.precio

    copia.querySelector('button').addEventListener('click', () => {
        carrito.push(Joya)
        console.table(carrito)
    })

    contenedor_articulos.append(copia)
});

// BUSCADOR //

const buscador = document.getElementById("buscador")
const articulos = document.getElementById("articulos")

const comenzarBusqueda = () => {
    const buscarJoya = buscador.value.toLowerCase();
    const filtrarProductos = joyas.filter((joya) => joya.nombre.toLowerCase().startsWith(buscarJoya))

    filtrarProductos.forEach((Joya) => {
        const template = document.createElement("template");
        template.textContent = Joya.nombre;
        articulos.appendChild(template)
    })
};

buscador.addEventListener("input", comenzarBusqueda);