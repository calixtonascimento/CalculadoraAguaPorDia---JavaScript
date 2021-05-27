const calcular = document.getElementById("calcular");

function aguapordia(){
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome !== "" && peso !== ""){

        const litrosagua = ((peso * 35)/1000).toFixed(2);

        resultado.textContent = `${nome} sua quantidade de água por dia é de ${litrosagua} Litros`;

    }else{
        resultado.textContent = "Preencha todos os Campos!!!";
    }
}

calcular.addEventListener("click", aguapordia);