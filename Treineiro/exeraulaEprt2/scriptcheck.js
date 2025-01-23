function verificando() 
{
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('idade');
    var res = window.document.getElementById('resultado');

if (fano.value.length == 0 || Number(fano.value) > ano) {
window.alert('Por favor, reveja se há algum erro nas informações adicionadas.');
} else { 
    var gen = window.document.getElementsByName('radgen')
    var idaderes = ano - Number(fano.value);
    res.innerHTML = `Você tem ${idaderes} de idade`
}





}