// se crean las barritas con una cantidad de 2o ya que va el ciclo for de 0 a 19
function crearBarra(id_barra){
    for(i=0;i<=19;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//selecciono cada barrita para utilizarla
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let c = document.getElementById("c");
crearBarra(c);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let python = document.getElementById("python");
crearBarra(python);

//guardo cada barrita que se va ir íntando de blanco
//comienzan en -1 porque no tiene ninguna pintada al iniciarse inicio el contador
let contadores = [-1,-1,-1,-1,-1,-1];
//utilizo esto de bandera para saber si se ejecuto 
let entro = false;

//función que aplica las animaciones de la habilidades el puimer valor la cantidad de barritas a pintar el segundo la posicion de cada barrita
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 14, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 10, 1, intervalJavascript);
        },100);
        const intervalc = setInterval(function(){
            pintarBarra(c, 18, 2, intervalc);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 20, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 19, 4, intervalPhp);
        },100);
        const intervalpython = setInterval(function(){
            pintarBarra(python, 15, 5, intervalpython);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "white";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}