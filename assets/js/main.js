
$("#listaOrigen, #listaDestino").on("click",function () {  
let opcionOrigen = $("#listaOrigen").val()
let opcionDestino =$("#listaDestino").val()
if ((opcionOrigen == 1&&opcionDestino==2 || opcionDestino==1 && opcionOrigen==2)||(opcionOrigen == 3 && opcionDestino == 4 || opcionDestino==3&&opcionOrigen==4) ){
  $("#origenImprimir").html($("#listaOrigen option:selected").text())
  $("#destinoImprimir").html($("#listaDestino option:selected").text())
  $("#infoEscala").html(`<div class="fs-5 rounded  bg-warning ">Información: este vuelo posee escala</div>`)
} 
else if(opcionDestino==opcionOrigen){
  $("#origenImprimir").html("")
  $("#destinoImprimir").html("")
  $("#infoEscala").html("")
}
else{
  $("#origenImprimir").html($("#listaOrigen option:selected").text())
  $("#destinoImprimir").html($("#listaDestino option:selected").text())
  $("#infoEscala").html(`<div class="fs-5 rounded text-white bg-info bg-opacity-50">Información: este vuelo no posee escala</div>`)
}
})

$("#fechaOrigen, #fechaDestino").on("change",function () {
$("#fechaImprimirOrigen").html($("#fechaOrigen").val())
$("#fechaImprimirDestino").html($("#fechaDestino").val())

})
let fechaActual = moment().format('YYYY-MM-DD')
$("#fechaOrigen").val(fechaActual)
$("#fechaImprimirOrigen").html($("#fechaOrigen").val())