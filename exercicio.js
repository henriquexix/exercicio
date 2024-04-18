let cadastro = [];

function gerarId() {
    return Math.floor(Math.random() * 1000);
}

function cadastrar(pessoa) {
    pessoa.id = gerarId();
    cadastro.push(pessoa);
    console.log("Pessoa cadastrada:", pessoa);
}

function atualizar(id, dados) {
    const pessoa = cadastro.findIndex(individuo => individuo.id === id);
    if (pessoa) {
        Object.assign(pessoa, dados);
        console.log("Pessoa atualizada:", pessoa);
    }
}

function deletar(id) {
    cadastro = cadastro.findIndex(individuo => individuo.id !== id);
    console.log("Pessoa deletada com sucesso!");
}

function listar() {
    return cadastro;
}

cadastrar({ nome: 'Junior', idade: 25, cidade: 'Porto Alegre'});
cadastrar({ nome: 'Rafael', idade: 25, cidade: 'Mato Grosso do Sul'});
cadastrar({ nome: 'Henrique', idade: 23, cidade: 'Sarandi'});

atualizar(cadastro[1].id, { idade: 26,});
atualizar(cadastro[1].id, { cidade: Curitiba,});
deletar(cadastro[3].id);

console.log("Lista atualizada:", listar());