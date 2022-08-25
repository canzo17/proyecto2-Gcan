const menos = document.getElementById('menos')
const mas = document.getElementById('mas')
const reinicio = document.getElementById('reinicio')
var numero = document.getElementById('cont')
let valor = 0
mas.addEventListener('click',function(){
    cambioNumero(++valor)
    color()
})
menos.addEventListener('click',function(){
    cambioNumero(--valor)
    color()
})

reinicio.addEventListener('click',function(){
    valor = 0
    color()
    cambioNumero(0)
})

function cambioNumero(x){
numero.innerHTML = x
}

function color(){
    if (valor >0) {
        numero.style.color = "green"
    } else if(valor <0){
        numero.style.color = "red"
    } else{
        numero.style.color = "blue"
    }
    

}