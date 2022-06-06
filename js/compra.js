
class Productos{
    constructor(nombre,precio) {
        this.nombre=nombre
        this.precio=precio
    }
}

const fideos = new Productos("Fideos",300)
const sorrentinos = new Productos("Sorrentinos", 400);
const panzottis = new Productos("Panzottis",400);

const productos = [fideos, sorrentinos, panzottis]

let opcionProductos = 0;

let dineroIngresado = 0;

const boton1 = document.getElementById("Productos");
    boton1.addEventListener("click", ()=>{
        mostrarMenuProductos();
    });

function mostrarMenuProductos(){

    const h4 = document.createElement("h4")

    const btnFideos = document.createElement("button");
    const btnSorrentinos= document.createElement("button");
    const btnPanzottis = document.createElement("button");

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
        sessionStorage.setItem (fideos.nombre,fideos.precio);
    });

    btnSorrentinos.addEventListener("click", ()=>{
        venderProducto(2)
        sessionStorage.setItem (sorrentinos.nombre, sorrentinos.precio);
    });

    btnPanzottis.addEventListener("click", ()=>{
        venderProducto(3)
        sessionStorage.setItem (panzottis.nombre, panzottis.precio);
    });

}

function venderProducto(opcion){
    pedirDinero(productos[opcion-1].precio)
}

function pedirDinero(priceProduct){

    const dineroIngresado = document.createElement ("div")
    dineroIngresado.innerHTML = `<label>¿Con cuanto va a pagar?</label>
                        <input type=text id=dineroIngresado>
                        <button id=btnDineroIngresado>Enviar</button>`
                        
    const contenedor = document.querySelector(".contenidoCarrito")
    
    contenedor.appendChild(dineroIngresado)
    
    const boton = document.getElementById ("btnDineroIngresado");
    boton.addEventListener("click", () => {
        mostrarCambio(document.getElementById("dineroIngresado").value, priceProduct)
    })
    
    /* if(dineroIngresado<priceProduct){
        alert("monto invalido")
    }

    else{
        mostrarCambio(dineroIngresado, priceProduct);
    } */
}
   
function mostrarCambio(dineroIngresado, priceProduct) {
    let cambio = dineroIngresado - priceProduct;

    const cambioFinal = document.createElement("div")
    
    cambioFinal.innerHTML = `<h4>Su cambio es: ${cambio}</h4>
                                <h4>Su pedido fue realizado con éxito, ¡Muchas gracias!`

    const contenedor = document.querySelector(".contenidoCarrito")

    contenedor.appendChild(cambioFinal)

    /*    
    const resumen = document.createElement("div");
    resumen.innerHTML = `<h4>Resumen del pedido:</h4>
                            <p>${sessionStorage.getItem(key, value)}</p>`
    document.body.appendChild(resumen)
     */
    
    resetVars();
}

function resetVars() {
    dineroIngresado = 0;
}