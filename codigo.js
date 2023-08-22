function darBienvenida(){
    let usuario = prompt ("Bienvenido cual es tu nombre?")
    alert("Bienvenido/a "+usuario)
}
darBienvenida()

alert("Bienvenido/a a un juego de preguntas sobre futbol")
alert("Por cada acierto ganas 2 PTS")
alert("Asi que anota todos tus puntos!")

//Preguntas
let anioMessi = prompt("En que año debuto Messi?")

if(anioMessi == "2004"){
    alert("Excelente ganaste 2 pts")
}else if(anioMessi == "2003"){
    alert("Estuviste cerca ganaste 1 pts")
}else if(anioMessi =="2005"){
    alert("Estuviste cerca ganaste 1 pts")
}else{
    alert("El año en que debuto Messi fue en 2004")
}

alert("Siguiente pregunta!")

let goles = prompt("Cuantos goles hizo en total Messi en toda su carrera?")

if(goles == "815"){
    alert("Excelente ganaste 2 pts")
}else if(goles == "820"){
    alert("Estuviste cerca ganaste 1 pts")
}else if(goles == "810"){
    alert("Estuviste cerca ganaste 1 pts")
}else{
    alert("El total de goles que ha hecho Messi es de 820!!")
}

alert("Espero que vayas bien!")
alert("Siguiente pregunta!")

let titulosMessi = prompt("Cuantos titulos gano Messi en toda su carrera?")

if(titulosMessi == "42"){
    alert("Excelente ganaste 2 pts")
}else if(titulosMessi == "41"){
    alert("Estuviste cerca ganaste 1 pts")
}else if(titulosMessi == "40"){
    alert("Estuviste cerca ganaste 1 pts")
}else{
    alert("El total de titulos de Messi es de 42!!")
}

alert("Espero te estes divirtiendo!")
alert("Sigamos con las preguntas!!")

let asistenciasMessi = prompt("Cuantas asistencias hizo Messi en su carrera?")

if(asistenciasMessi == "352"){
    alert("Excelente ganaste 2 pts")
}else if(asistenciasMessi == "353"){
    alert("Estuviste cerca ganaste 1 pts")
}else if(asistenciasMessi == "351"){
    alert("Estuviste cerca ganaste 1 pts")
}else{
    alert("El total de asistencias que ha hecho Messi es de 352!!")
}

alert("Fin del juego!")
alert("Espero te hayas divertido!")
alert("Muchas gracias por jugar!!")
