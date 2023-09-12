class Cliente {
    constructor(nome, mesas, descricao){
    this.id = this.gerarId(); 
    this.nome = nome;
    this.mesas = mesas;
    this.descricao = descricao;
    }
    gerarId() {
        return Math.floor(Math.random() * 1000)
    }
    
}

class ClienteService {
    constructor(){
        this.clientes = [];
    }
    adicionarClientes(parametro) {
        this.clientes.push(parametro)
    }
    listarClientes(){
        return this.clientes;
    }
    listarClientesPorId(parametro) {
        return this.clientes.find((cliente) => cliente.id == parametro)
    }
    atualizarCliente(id, nome, mesas, descricao) {
        const cliente = this.listarClientesPorId(id);

        cliente.nome = nome;
        cliente.mesas = mesas;
        cliente.descricao = descricao;
        

        return cliente;
    }
    deletarCliente(parametro) {
        return (this.clientes = this.clientes.filter(
            (cliente) => cliente.id != parametro));
    }
}
const clienteService = new ClienteService();



function criarCliente() {
    const nome = document.getElementById("cliente").value;
    const mesas = Number(document.getElementById("mesa").value);
    const descricao = document.getElementById("descricao").value;

    const novacliente = new Cliente (nome, mesas, descricao);

    clienteService.adicionarClientes(novacliente);

    listarClientes();
}

function listarClientes() {
    const clientes = clienteService.listarClientes();

    const elementoLista = document.getElementById("listarclientes");
    elementoLista.innerHTML = '';

    let content = '';
    clientes.forEach((cliente) => {
        content += `
        <div>
        <p> Id: ${cliente.id} </p>
        <p> cliente: ${cliente.nome} </p>
        <p> mesas: ${cliente.mesas}  </p>
        <p> descrição: ${cliente.descricao} </p>
        <button onclick="atualizarCliente(${cliente.id})">Editar</button>
        <button onclick="deletarCliente(${cliente.id})">Delete</button>
        </div>`
    })

    elementoLista.innerHTML = content;

    limparInputs();
}

let aux = null;

function atualizarCliente(id) {
    const cliente = clienteService.listarClientesPorId(id);

    document.getElementById("cliente").value = cliente.nome;
    document.getElementById("mesa").value = cliente.mesas;
    document.getElementById("descricao").value = cliente.descricao;

    document.getElementById("botaoCadastrar").classList.add("hidden");
    document.getElementById("botaoEditar").classList.remove("hidden");

    aux = id;
}

function editarCliente() {
    const cliente = document.getElementById("cliente").value;
    const mesas = Number(document.getElementById("mesa").value);
    const descricao = document.getElementById("descricao").value;

    clienteService.atualizarCliente(aux, cliente, mesas, descricao);

    listarClientes();

    document.getElementById("botaoCadastrar").classList.add("hidden");
    document.getElementById("botaoEditar").classList.remove("hidden");

    document.getElementById("listarMesaUnica").classList.add("hidden");

    aux = null

}

function limparInputs() {
    document.getElementById("cliente").value = '';
    document.getElementById("mesa").value = '';
    document.getElementById("descricao").value = '';
}
function deletarCliente(id) {
    clienteService.deletarCliente(id);

    listarClientes();

    document.getElementById("listarMesaUnica").classList.add("hidden");
}
function deletarCliente(id) {
    clienteService.deletarCliente(id);
  
    listarClientes();
  
    document.getElementById("listarMesaUnica").classList.add("hidden");
  }