function selectionSort(vetor){
    let menor;
    let tmp;
    for (let i = 0; i < vetor.length; i++){
        menor = i;
        for (let j = i + 1; j < vetor.length; j++){
            if (vetor[j] < vetor[menor]){
                menor = j;
            }
        }
        tmp = vetor[i];
        vetor[i] = vetor[menor];
        vetor[menor] = tmp;
    }
    return vetor;
}

function ordenar(){
    var vetorElementos = document.getElementById("vetor_ordenar").value;
    var resultado = vetorElementos.split(",");
    let result = resultado.map(i=>Number(i))
    document.getElementById("vetor_ordenado").innerHTML = selectionSort(result);
}

