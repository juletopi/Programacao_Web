// Span com atualização automática do ano para o rodapé
document.getElementById('current-year').textContent = new Date().getFullYear();

const tarefas = {
    lista: [],

    entradaTarefa: document.getElementById('entradaTarefa'), 
    botaoAdicionar: document.getElementById('botaoAdicionar'),
    listaTarefas: document.getElementById('listaTarefas'),

    // Função de adicionar uma nova tarefa
    adicionarTarefa: () => {
        const textoTarefa = tarefas.entradaTarefa.value.trim();
        
        if (textoTarefa !== ''){
            // Cria um objeto de tarefa
            const tarefa = {
                texto: textoTarefa,
                concluida: false
            }
            // Adiciona ao array de tarefa
            tarefas.lista.push(tarefa);
            // Atualiza a exibição de tarefas
            tarefas.exibirTarefas();
            // Limpa o campo de entrada
            tarefas.entradaTarefa.value = '';
            tarefas.entradaTarefa.focus();
        }
    },

    // Função para exibir tarefas
    exibirTarefas: () => {
        // Limpa a lista antes de exibi-la
        tarefas.listaTarefas.innerHTML = '';
        // Itera o array de tarefas
        tarefas.lista.forEach((tarefa, indice) => {
            const itemTarefa = document.createElement('li');
            const texto = document.createElement('span');

            texto.textContent = tarefa.texto;

            if (tarefa.concluida){
                itemTarefa.classList.add('completed')
            }

            texto.addEventListener('click', () => {
                tarefa.marcarConcluida(indice)
            });

            // Botão para remover a tarefa
            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.classList.add('botaoRemover');
            botaoRemover.addEventListener('click', () => (
                tarefas.removerTarefa(indice)
            ));

            itemTarefa.appendChild(texto);
            itemTarefa.appendChild(botaoRemover);
            tarefas.listaTarefas.appendChild(itemTarefa);
        });
    },

    // Função para marcar uma tarefa como concluída
    marcarConcluida: (indice) => {
        tarefas.lista[indice].concluida = !tarefas.lista[indice].concluida;
        tarefas.exibirTarefas();
    },

    // Função para remover uma tarefa
    removerTarefa: (indice) => {
        tarefas.lista.splice(indice, 1);
        tarefas.exibirTarefas();
    },

    // Método de inicialização
    init: () => {
        // Adicionar evento de clique ao botão
        tarefas.botaoAdicionar.addEventListener('click', tarefas.adicionarTarefa);

        // Adicionar evento de tecla "Enter" no campo de entrada
        tarefas.entradaTarefa.addEventListener('keyup', (evento) => {
            if (evento.key === 'Enter') {
                    tarefas.adicionarTarefa();
            }
        });
    }
};

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    tarefas.init();
});