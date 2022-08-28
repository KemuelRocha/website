function selectionSort(){
    var vetorElementos = document.getElementById("vetor");
    var vetorOriginal = vetorElementos.value;
    var resultado = vetorOriginal.split(",");

    console.log(resultado);

    // var vetor = [vetororiginal];
    // var menor;
    // for (var i = 0; i < vetor.length; i++){
    //     menor = i;
    //     for (var j = i + 1; j < vetor.length; j++){
    //         if (vetor[j] < vetor[menor]){
    //             menor = j;
    //         }
    //     }
    //     if (i != menor){
    //         [vetor[i], vetor[menor]] = [vetor[menor], vetor [i]];
    //     }   
    // }
    // var Ordenado = vetor;
    // var elementoOrdenado = document.getElementById("vetorOrdenado");
    // var vetorOrdenado  = "Vetor ordenado: " + Ordenado;
    // elementoValorConvertido.innerHTML = vetorOrdenado;
}

