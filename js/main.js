let nombre = prompt ("Presentame tu nombre")
console.log ("Ingresaste tú nombre")

function Saludo () {
    alert("Bienvenido a VILLAshop");}
console.log ("Es un honor tenerte aqui")

class Producto{
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 0;}

    descripcion(){
     return `nombre: ${this.nombre}
            \nprecio: ${this.precio}`
    }
}

class Carrito{
    constructor(listaDeCompra){     
            this.precioTotal = 0
            this.listaDeCompra = listaDeCompra
    }

    calcularPrecioTotal(){
        for (const objeto_dentro of this.listaDeCompra) {
            this.precioTotal = this.precioTotal + objeto_dentro.precio * objeto_dentro.cantidad 
        }
        return this.precioTotal
    }

    conIVA(){
        return this.precioTotal * 1.03
    }

    sinIVA(){
        return this.precioTotal * 0.21
    }
}


const listaCompraUsuario = []

const listaProductos = [new Producto(1,"GT 710",150),
                        new Producto(2,"GT 740",200),
                        new Producto(3,"GTX 1060",250),
                        new Producto(4,"RTX 3090",1300)]


console.log("Tengo las siguentes Tarjetas Graficas para ti")

for (let i = 0; i < listaProductos.length; i++) {
    
    console.log((i+1)+") "+listaProductos[i].descripcion())
    
}

let respuesta = Number(prompt("¿En que tarjeta grafica estas interesado?"))

if( respuesta >= 1 && respuesta <= listaProductos.length){
    
    listaCompraUsuario.push( listaProductos[respuesta-1] )

    let unidadesRequeridas = Number(prompt("¿Cuantas unidades deseas?"))

    let ultimoValor = listaCompraUsuario.length-1
    listaCompraUsuario[ultimoValor].cantidad = unidadesRequeridas
}

const comprar = new Carrito( listaCompraUsuario )

console.log( "Precio Total: $"+comprar.calcularPrecioTotal() )
console.log( "más el IVA: $"+comprar.sinIVA())
console.log("Precio Final con IVA: $"+ comprar.conIVA())