let nombre = prompt ("Presentame tu nombre")
console.log ("Ingresaste tú nombre")

function Saludo () {
    alert("Bienvenido a VILLAshop");}
console.log ("Es un honor tenerte aqui, presiona en CLICK AQUI")



/* Ayuda no puedo activar la Simulación de notas:( */

function promedio (nota1, nota2, nota3){

    return(nota1+nota2+nota3)
}

function aop (promedio) { 
{if(promedio > 7)   {
                    return "Estás aprobado, haz superado mi quiz"
                    }
        else {return "No haz superado mi quiz:("}
}

let rta = "";

while(rta ==""){
nota1 = Number (prompt("Ingresa tú primera nota"))
nota2 = Number (prompt("Ingresa tú segunda nota"))
nota3 = Number (prompt("Ingresa tú tercera nota"))

let resultado = promedio(nota1,nota2,nota3)
console.log (aop(resultado))

rta = prompt("Ingrese \"ESC\" para finalizar tú operación.")}
}

/* Para el Proyecto quiero hacer un carrito de compras, me imagino que en el curso dirán cómo. Pero tengo una duda
el carrito de compras que tipo de función llevaría? */ 

/* No logré hacer el simulador de notas , necesito que en la entrega me digas que está mal y porqué... Sería de gran ayuda */


