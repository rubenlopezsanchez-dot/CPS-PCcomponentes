let productos = [
    {
        id: 1,
        nombre: "PC Gaming Ryzen 5 5600X",
        precio: 749.99,
        imagen: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
    },

    {
        id: 2,
        nombre: "NVIDIA GeForce RTX 4060 8GB",
        precio: 299.99,
        imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
    },

    {
        id: 3,
        nombre: "AMD Ryzen 7 7800X3D",
        precio: 389.99,
        imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704"
    },

    {
        id: 4,
        nombre: "Monitor Gaming 27 pulgadas 180Hz",
        precio: 199.99,
        imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
    },

    {
        id: 5,
        nombre: "Teclado Mecánico RGB",
        precio: 69.99,
        imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },

    {
        id: 6,
        nombre: "Ratón Gaming RGB 12000 DPI",
        precio: 39.99,
        imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },

    {
        id: 7,
        nombre: "32GB RAM DDR5",
        precio: 119.99,
        imagen: "https://images.unsplash.com/photo-1562976540-1502c2145186"
    },

    {
        id: 8,
        nombre: "SSD NVMe 1TB",
        precio: 79.99,
        imagen: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b"
    }
];


let carrito = [];


/* MOSTRAR PRODUCTOS */

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


/* AÑADIR AL CARRITO */

function añadirCarrito(id) {

    let producto = productos.find(p => p.id === id);

    carrito.push(producto);

    actualizarContador();

    alert("Producto añadido al carrito");
}


/* ACTUALIZAR CONTADOR */

function actualizarContador() {

    document.getElementById("contador").textContent = carrito.length;

}


/* MOSTRAR CARRITO */

function mostrarCarrito() {

    document.getElementById("carrito-ventana").style.display = "block";

    mostrarProductosCarrito();

}


/* CERRAR CARRITO */

function cerrarCarrito() {

    document.getElementById("carrito-ventana").style.display = "none";

}


/* MOSTRAR PRODUCTOS DEL CARRITO */

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


/* ELIMINAR PRODUCTO */

function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    actualizarContador();

    mostrarProductosCarrito();

}


/* BUSCADOR */

function buscar() {

    let texto = document.getElementById("busqueda").value.toLowerCase();

    let resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(resultados);

}


/* ORDENAR POR PRECIO */

function ordenarPrecio() {

    productos.sort((a, b) => a.precio - b.precio);

    mostrarProductos();

}


/* COMPRAR */

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


/* CARGAR PRODUCTOS */

mostrarProductos();
