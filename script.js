let productos = [
    {
        id: 1,
        nombre: "PC Gaming Ryzen 5 5600X",
        precio: 749.99,
        imagen: "img/pc-gaming.jpg"
    },

    {
        id: 2,
        nombre: "NVIDIA GeForce RTX 4060 8GB",
        precio: 299.99,
        imagen: "img/rtx-4060.jpg"
    },

    {
        id: 3,
        nombre: "AMD Ryzen 7 7800X3D",
        precio: 389.99,
        imagen: "img/ryzen-7.jpg"
    },

    {
        id: 4,
        nombre: "Monitor Gaming 27 pulgadas 180Hz",
        precio: 199.99,
        imagen: "img/monitor.jpg"
    },

    {
        id: 5,
        nombre: "Teclado Mecánico RGB",
        precio: 69.99,
        imagen: "img/teclado.jpg"
    },

    {
        id: 6,
        nombre: "Ratón Gaming RGB 12000 DPI",
        precio: 39.99,
        imagen: "img/raton.jpg"
    },

    {
        id: 7,
        nombre: "32GB RAM DDR5",
        precio: 119.99,
        imagen: "img/ram.jpg"
    },

    {
        id: 8,
        nombre: "SSD NVMe 1TB",
        precio: 79.99,
        imagen: "img/ssd.jpg"
    }
];

let carrito = [];

function mostrarProductos(lista = productos) {

    let contenedor = document.getElementById("lista-productos");

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        contenedor.innerHTML += `

        <div class="producto">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <div class="estrellas">
                ★★★★★
            </div>

            <p class="stock">
                ✓ En stock
            </p>

            <p class="precio">
                ${producto.precio.toFixed(2)} €
            </p>

            <button class="btn-carrito"
                onclick="añadirCarrito(${producto.id})">
                Añadir al carrito
            </button>

        </div>

        `;
    });
}

function añadirCarrito(id) {

    let producto = productos.find(p => p.id === id);

    carrito.push(producto);

    actualizarContador();

    alert("Producto añadido al carrito");
}

function actualizarContador() {

    document.getElementById("contador").textContent = carrito.length;

}

function mostrarCarrito() {

    document.getElementById("carrito-ventana").style.display = "block";

    mostrarProductosCarrito();

}

function cerrarCarrito() {

    document.getElementById("carrito-ventana").style.display = "none";

}

function mostrarProductosCarrito() {

    let contenedor = document.getElementById("productos-carrito");

    contenedor.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {

        contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";

    }

    carrito.forEach((producto, indice) => {

        total += producto.precio;

        contenedor.innerHTML += `

        <div class="item-carrito">

            <div>
                <strong>${producto.nombre}</strong>
                <br>
                ${producto.precio.toFixed(2)} €
            </div>

            <button onclick="eliminarProducto(${indice})">
                Eliminar
            </button>

        </div>

        `;

    });

    document.getElementById("total").textContent = total.toFixed(2);

}

function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    actualizarContador();

    mostrarProductosCarrito();

}

function buscar() {

    let texto = document.getElementById("busqueda").value.toLowerCase();

    let resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(resultados);

}

function ordenarPrecio() {

    productos.sort((a, b) => a.precio - b.precio);

    mostrarProductos();

}

function comprar() {

    if (carrito.length === 0) {

        alert("El carrito está vacío.");

        return;

    }

    alert("Pedido realizado correctamente.");

    carrito = [];

    actualizarContador();

    mostrarProductosCarrito();

}

mostrarProductos();

mostrarProductos();
