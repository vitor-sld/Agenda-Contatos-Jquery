
$('form').submit(function (e) {
    e.preventDefault();


    const tarefa = $('#nome-tarefa').val()
    const linha = $(`<li> ${tarefa} </li>`).appendTo('#tabela');

});
$('li').on('click', function () {
    alert($('li'))
})
