const stockProductos = [
    {
      id: 1,
      nombre: "GT 710",
      cantidad: 1,
      descripcion: "Tarjeta Grafica 2gb",
      precio: 150,
      img: "img/gt710.jfif",
    },
    {
      id: 2,
      nombre: "GT 1060",
      cantidad: 1,
      descripcion: "Tarjeta Grafica 3gb",
      precio: 250,
      img: "img/gtx1060.jpg",
    },
    {
      id: 3,
      nombre: "GT 740",
      cantidad: 1,
      descripcion: "Tarjeta Grafica 4gb",
      precio: 200,
      img: "img/gt740.jfif",
    },
    {
      id: 4,
      nombre: "RTX 3090",
      cantidad: 1,
      descripcion: "Tarjeta Grafica 24gb",
      precio: 1300,
      img: "img/rtx3090.jfif",
    },
    {
      id: 5,
      nombre: "GTX 1650",
      cantidad: 1,
      descripcion: "Tarjeta Grafica 4gb",
      precio: 300,
      img: "img/gtx16504gb.jfif",
    },
    {
      id: 6,
      nombre: "RTX 4090",
      cantidad: 1,
      descripcion: "Tarjeta Grafica 24gb",
      precio: 2300,
      img: "img/RTX409024GB.jpg",
    },
    ];
  let carrito = [];
  

const contenedor = document.querySelector("#contenedor")
const carritoContenedor = document.querySelector('#carritoContenedor')
const vaciarCarrito = document.querySelector('#vaciarCarrito')
const precioTotal = document.querySelector('#precioTotal')
const procesarCompra = document.querySelector('#procesarCompra')
const activarFuncion = document.querySelector('#activarFuncion')
const formulario = document.querySelector('#procesar-pago')
const totalProceso = document.querySelector('#totalProceso')

if (activarFuncion) {
activarFuncion.addEventListener('click', procesarPedido) }

if (formulario) {
  formulario.addEventListener('submit', enviarPedido)
}


document.addEventListener('DOMContentLoaded', () => {
carrito = JSON.parse(localStorage.getItem('carrito')) || []
mostrarCarrito()

 if(activarFuncion) {
document.querySelector('#activarFuncion').click(procesarPedido)
 }
}) 


stockProductos.forEach((prod) => {
    const {id, nombre, precio, descripcion, img, cantidad} = prod
    contenedor.innerHTML += `
    
  <div class="card" style="width: 20rem;">
      <img class="card-img-top" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
          <p class="card-text">Precio: ${precio}</p>
          <p class="card-text">Descripcion: ${descripcion}</p>
          <p class="card-text">Cantidad: ${cantidad}</p>
          <button class="btn btn-primary" onclick="agregarProducto(${id})">Agregar al carrito</button>
      </div>
  </div>
    `
    })

if(procesarCompra) {
procesarCompra.addEventListener('click', () => {

  if (carrito.length === 0){
    Swal.fire({
      title: "¡Tu carrito está vacio!",
      text: "Compra algo para continuar con la compra",
      icon: "error",
      confirmButtonText: "Aceptar",})

}     else {
        location.href = "compra.html"
      }
    })

  }
  

if(vaciarCarrito) {
 vaciarCarrito.addEventListener('click', () => {
  carrito.length = []
  mostrarCarrito()
})
}

function agregarProducto(id) {
  
  const existe = carrito.some(prod => prod.id == id)

  if(existe) {
    const prod = carrito.map(prod => {
      if(prod.id === id) {prod.cantidad++}
    })
  }

  else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  
  
  
  mostrarCarrito()
}

const mostrarCarrito = () => {
const modalBody = document.querySelector('.modal .modal-body')
if (modalBody) {
modalBody.innerHTML = ''
carrito.forEach((prod) => {
const {id, nombre, img, descripcion, cantidad, precio} = prod
modalBody.innerHTML += `
    
<div class="modal-contenedor">
  
<div>
  <img class="img-fluid img-carrito" src="${img}"/>
</div>
    
  <div>
    <p>Producto: ${nombre}</p>
    <p>Precio: ${precio}</p>
    <p>Cantidad: ${cantidad}</p>

    <button onclick="eliminarProducto(${id})"class="btn btn-danger">Eliminar producto</button>
  </div>

</div>
    
    `
  })
}

if (carrito.length == 0) {
  modalBody.innerHTML = `
  <p class="text-center text-primary parrafo">¿Que esperas? ¡Elige algo!</p>
  ` }  else {
    console.log('Algo')
  }

  carritoContenedor.textContent = carrito.length
  
  if (precioTotal) {
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  }
  
  guardarStorage()
}

function eliminarProducto(id) {
  const juegoId = id 
  carrito = carrito.filter((juego) => juego.id !== juegoId)
  mostrarCarrito()
}

function guardarStorage(){
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector ('#lista-compra tbody')
    const {id, nombre, precio, descripcion, img, cantidad} = prod

    const row = document.createElement('tr')
    row.innerHTML += `
    
    <td> 
    <img class="img-fluid img-carrito" src="${img}" />
    </td>

    <td>${nombre}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td>${precio * cantidad}</td>

    `

    listaCompra.appendChild(row)
  })

  totalProceso.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

function enviarPedido (e){
  e.preventDefault()
  const cliente = document.querySelector('#cliente').value
  const correo = document.querySelector('#cliente').value

  if(correo === '' || cliente === '' ) {
    Swal.fire({
      title: "¡Debes completar tu email y nombre!",
      text: "Rellena el formulario",
      icon: "error",
      confirmButtonText: "Aceptar",
  })
} 

else {
  
  const btn = document.getElementById('button');
   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_kzhkavq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
};
  
  const spinner = document.querySelector('#spinner')
spinner.classList.add('d-flex')
spinner.classList.remove('d-none')

setTimeout(() =>  {
  spinner.classList.remove('d-flex')
  spinner.classList.add('d-none')
  formulario.reset()
}, 3000)

const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)

     localStorage.clear ()

}

