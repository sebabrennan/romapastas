/* 
class Productos{
    constructor(nombre,precio) {
        this.nombre=nombre
        this.precio=precio
    }
}

const fideos = new Productos("Fideos",300)
const sorrentinos = new Productos("Sorrentinos", 400);
const panzottis = new Productos("Panzottis",400);

const productos = [fideos, sorrentinos, panzottis] */


let carrito =[];

class ProductoCarrito {
    constructor(nombre, precio, imagen, id){
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
        this.id=id;
    }
}

let divContainer = document.getElementById("row");

function rellenarPagina(arrayProductos) {
    
    for (let producto of arrayProductos) {
        let div = document.createElement("div")
        div.classList = "col-3 mt-3";

        div.innerHTML = `<div class="cardProducto" style= "width:15rem;">
                            <img src="${producto.imagen}" class="card-img-top" alt=${producto.id}>  
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">$ <strong>${producto.precio}</strong> ARS</p>
                                <button class="btn btn-primary anadirCarrito">Añadir al carrito</button>
                            </div>
                        </div>`

        divContainer.appendChild(div)
    } 
}

rellenarPagina(productos);

let botones = document.querySelectorAll(".anadirCarrito");

botones.forEach(elemento => {
    elemento.addEventListener("click", anadirCarrito)
})

function anadirCarrito(e){

    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"))

    if (carritoLocalStorage){
        carrito = carritoLocalStorage
    }

    let nombre = e.target.parentNode.children[0].textContent;
    let precio = e.target.parentNode.children[1].children[0].textContent;
    let imagen = e.target.parentNode.parentNode.children[0].src;
    let id = e.target.parentNode.parentNode.children[0].alt;

    const producto = new ProductoCarrito (nombre, precio, imagen, id)

    carrito.push(producto)

    localStorage.setItem("carrito", JSON.stringify(carrito))
}

/* let opcionProductos = 0;

let dineroIngresado = 0;

const boton1 = document.getElementById("Productos");
    boton1.addEventListener("click", ()=>{
        mostrarMenuProductos();
    }); */

/* function mostrarMenuProductos(){

    const h4 = document.createElement("h4")
    h4.classList.add("item-carrito")

    const btnFideos = document.createElement("button");
    const btnSorrentinos= document.createElement("button");
    const btnPanzottis = document.createElement("button");

    btnFideos.classList.add("btn", "btn-carrito")
    btnSorrentinos.classList.add("btn", "btn-carrito")
    btnPanzottis.classList.add("btn","btn-carrito")
    

    h4.innerText = "¿Qué producto desea pedir?"

    btnFideos.innerText= `FIDEOS (${fideos.precio}ARS)`;
    btnSorrentinos.innerText= `SORRENTINOS (${sorrentinos.precio}ARS)`;
    btnPanzottis.innerText= `PANZOTIS (${panzottis.precio}ARS)`;
    
    const contenedor = document.querySelector(".contenidoCarrito")

    contenedor.appendChild(h4)

    contenedor.appendChild(btnFideos);
    contenedor.appendChild(btnSorrentinos);
    contenedor.appendChild(btnPanzottis);

    btnFideos.addEventListener("click", ()=>{
        venderProducto(1)
        localStorage.setItem (fideos.nombre,fideos.precio);
    });

    btnSorrentinos.addEventListener("click", ()=>{
        venderProducto(2)
        localStorage.setItem (sorrentinos.nombre, sorrentinos.precio);
    });

    btnPanzottis.addEventListener("click", ()=>{
        venderProducto(3)
        localStorage.setItem (panzottis.nombre, panzottis.precio);
    });

}

function venderProducto(opcion){
    pedirDinero(productos[opcion-1].precio)
}

function pedirDinero(priceProduct){

    const dineroIngresado = document.createElement ("div")
    dineroIngresado.innerHTML = `<label>¿Con cuanto va a pagar?</label>
                        <input type=text id=dineroIngresado>
                        <button id=btnDineroIngresado class="btn btn-carrito">Enviar</button>`
    
    dineroIngresado.classList.add("item-carrito")
                        
    const contenedor = document.querySelector(".contenidoCarrito")
    
    contenedor.appendChild(dineroIngresado)

    
    
    const boton = document.getElementById ("btnDineroIngresado");
    boton.addEventListener("click", () => {

        const dineroValue = document.getElementById("dineroIngresado").value

        if (dineroValue>=priceProduct){
            Swal.fire({
                title: '¡Pedido realizado',
                text: 'Su pedido ha sido realizado con éxito',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#ffc400fa',
                background: '#fcfc9e'
            })
            mostrarCambio(dineroValue, priceProduct)

        }
        else {
            Swal.fire({
                title: '¡Error!',
                text: 'El monto ingresado es menor al precio del producto',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#ffc400fa',
                background: '#fcfc9e'
            })
        } 
    })
}

function mostrarCambio(dineroIngresado, priceProduct) {

    let cambio = dineroIngresado - priceProduct;

    const cambioFinal = document.createElement("div")

    cambioFinal.classList.add("item-carrito")
    
    cambioFinal.innerHTML = `<h4>Su cambio es: ${cambio}</h4>
                                <h4>Su pedido fue realizado con éxito, ¡Muchas gracias!`

    const contenedor = document.querySelector(".contenidoCarrito")

    contenedor.appendChild(cambioFinal)

    resetVars();
    resumenPedido();
}

function resetVars() {
    dineroIngresado = 0;
}
   
function resumenPedido() {
    const resumen = document.createElement("div");
    resumen.classList.add("item-carrito")
    const contenedor = document.querySelector(".contenidoCarrito")

    for (let i=0; i<localStorage.length;i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(key,value)
        resumen.innerHTML = `<h4>Resumen del pedido:</h4>
        <p>Producto: ${key} - ${value} ARS</p>`
        }
          
    contenedor.appendChild(resumen)
} */