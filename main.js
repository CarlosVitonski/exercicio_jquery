$(document).ready(function(){

    $('form').on('submit', function(e) {
            e.preventDefault();

            adicionarTarefa();

            removerTarefa();

            atualizarTarefa();

    } );

    function adicionarTarefa() {

        const adicionarNovaTarefa = $('#nome-tarefa').val();
            
        const novaTarefa = $('<tr></tr>');

        $(`<td> <a href="#" class="botao-verificar"><i class="fa-regular fa-circle"></i></a></td>`).appendTo(novaTarefa);
            
        $(`<td> ${adicionarNovaTarefa}</td>`).appendTo(novaTarefa);
                
        $(`<td> <a href="#" class="botao-remover"> <i id="botao-excluir" class="fa-solid fa-delete-left"></i> </a> </td>`).appendTo(novaTarefa);
                
        $(novaTarefa).appendTo('tbody');
                
        $(novaTarefa).fadeIn(2000);

        $('#nome-tarefa').val('');

    };

    function removerTarefa() {

        $(".botao-remover").click(function(){
            $(this).parent().parent().remove();
        } );  

    };

    function atualizarTarefa() {

        $('i').click(function(){

            $(this).removeClass("fa-regular fa-circle").addClass("fa-solid fa-circle-check");

        } );

        $('a').click(function(){

            $(this).parent().parent().attr("style", "text-decoration: line-through; color: red;")

        } );
    };
    
} );

