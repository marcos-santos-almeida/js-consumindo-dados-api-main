async function buscaEndereco(cep) {
    var mensagem = document.getElementById("erro");
    mensagemError.innerHTML = "";

    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    var consultaCEPConvertida = await consultaCEP.json();
    if(consultaCEPConvertida.erro) {
        throw Error("cep não existe!");
    }
        var cidade = document.getElementById("cidade");
        var logradouro = document.getElementById("endereco");
        var estado = document.getElementById("estado");

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch(erro) {
        mensagemError.innerHTML = `<p>Cep inválido. tente novamente!</p>`
        console.log(erro);
    }
}k

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));