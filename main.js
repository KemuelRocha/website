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
    let result = resultimo.map(i=>Number(i))
    document.getElementById("vetor_ordenado").innerHTML = selectionSort(result);
}

function buscaBinaria(vetorprimos, item) {
    let primeiro = 0;
    let ultimo = vetorprimos.length - 1;
    let achou = false;
    while (primeiro<= ultimo && !achou) {
        meioLista = Math.ceil((primeiro+ ultimo) / 2);
        if (vetorprimos[meioLista] == item) {
            achou = true;
        }
        else {
            if (item < vetorprimos[meioLista]) {
                ultimo = meioLista - 1;
            }
            else {
                primeiro= meioLista + 1;
            }
        }
    }
    return achou;
}

function buscar(){
    let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 
                  43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 
                  101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 
                  151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 
                  199];

    var Elementos2 = document.getElementById("valor_buscar").value;
    let result2 = Number(Elementos2);
    document.getElementById("retorno").innerHTML = buscaBinaria(primos, result2);
}