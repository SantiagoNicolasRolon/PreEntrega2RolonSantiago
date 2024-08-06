const contenedor_compras = document.querySelector('#comprarArticulos');

carrito.forEach((Compra) => {
    const repetir = document.querySelector('template').content.cloneNode(true)

    repetir.querySelector('h2').textContent = Compra.nombre
    repetir.querySelector('img').src = Compra.img
    repetir.querySelector('b').textContent += Compra.precio

    contenedor_compras.append(repetir)
});