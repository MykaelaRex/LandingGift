var uno="Hola texto de ejemplo...";
 
/* definimos una variable llamada uno que contendra el texto que escribiremos con el efecto
maquina de escribir*/
 
var a=0;
var tres="";
 
/* creamos un string vacio*/
 
function escribir (){
var dos=uno.charAt(a)
 
/* aqui definimos una variable dos que contendra el carater de lugar a (a es un numero y representa el orden de los carateres en el texto en este caso vale 0)*/
 
a=a+1
 
/* aqui le aumentamos en 1 el valor a la variable a para que cuando llamemos de nuevo a la funcion escribir tendra el valor sumado en uno*/
 
tres=tres+dos
 
/* al string vacio tres lo concatenamos con el caracter de lugar a extraido del texto y lo guardamos en tres nuevamente */
 
document.getElementById("texto").innerHTML=tres
 
/*con esto insertamos en el div con id=texto el texto en la variable 3*/
 
}
setInterval("escribir()", 100)
 
/*usamos la funcion llamada setInterval, esta llama a la funcion escribir() cada 0,100 segundos*/
