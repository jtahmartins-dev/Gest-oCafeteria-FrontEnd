import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/LogoGestao.png'; // Garante que o caminho está correto

function App() {
  const API_URL = "http://localhost:8080";

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [clienteId, setClienteId] = useState('');
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    listarPedidos();
  }, []);

  const listarPedidos = async () => {
    try {
      const response = await fetch(`${API_URL}/pedidos`);
      const data = await response.json();
      setPedidos(data);
    } catch (error) {
      console.error("Erro na busca de dados:", error);
    }
  };

  // Estado para controlar se estamos editando
  const [editandoId, setEditandoId] = useState(null);

  const salvarCliente = async () => {
    const novoCliente = { nome, email };
    const response = await fetch(`${API_URL}/clientes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoCliente)
    });

    if (response.ok) {
      alert("Registro de cliente concluído.");
      setNome(''); setEmail('');
    }
  };

  // Função para APAGAR
  const deletarPedido = async (id) => {
    if (window.confirm("Tem certeza que deseja apagar este pedido?")) {
      await fetch(`${API_URL}/pedidos/${id}`, { method: 'DELETE' });
      listarPedidos(); // Atualiza a lista
    }
  };

  // Função para preparar a EDIÇÃO (preenche os inputs)
  const prepararEdicao = (pedido) => {
    setEditandoId(pedido.id);
    setDescricao(pedido.descricao);
    setValor(pedido.valorTotal);
    setClienteId(pedido.clienteId);
  };

  // Função para limpar os campos de entrada
  const limparCampos = () => {
    setDescricao('');
    setValor('');
    setClienteId('');
  };

  // Função para salvar/atualizar pedido (suporta POST e PUT)
  const salvarPedido = async () => {
  const dadosPedido = {
    descricao,
    valorTotal: parseFloat(valor),
    cliente: { id: parseInt(clienteId) }
  };

  const metodo = editandoId ? 'PUT' : 'POST';
  const url = editandoId ? `${API_URL}/pedidos/${editandoId}` : `${API_URL}/pedidos`;

  try {
    const response = await fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosPedido)
    });

    if (response.ok) {
      alert(editandoId ? "✅ Pedido atualizado!" : "☕ Pedido lançado!");
      
      // --- O SEGREDO ESTÁ AQUI ---
      setEditandoId(null); // Limpa o ID de edição para voltar ao modo "Criar"
      limparCampos();      // Limpa os inputs
      await listarPedidos(); // <--- OBRIGATÓRIO: Força o React a ler o banco de novo
      // ---------------------------

    } else {
      alert("❌ Erro ao salvar o pedido.");
    }
  } catch (error) {
    console.error("Erro na comunicação com a API:", error);
  }
};
  return (
    <div className="container">
      <div className="container">
      {/* 2. Substitui o h1 por isto: */}
      <header className="header-logo">
        <img src={logo} alt="Gestão de Pedidos Cafeteria" className="main-logo" />
      </header>

    </div>

      <div className="section-grid">
        <section className="card">
          <h2>Cadastro de Cliente</h2>
          <input 
            type="text" placeholder="Nome Completo" 
            value={nome} onChange={(e) => setNome(e.target.value)} 
          />
          <input 
            type="email" placeholder="Endereço de E-mail" 
            value={email} onChange={(e) => setEmail(e.target.value)} 
          />
          <button onClick={salvarCliente}>Registrar</button>
        </section>

        <section className="card">
          <h2>{editandoId ? 'Editar Pedido' : 'Novo Pedido'}</h2>
          <input
            type="text" placeholder="Descrição do Item"
            value={descricao} onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            type="number" placeholder="Valor Total (R$)"
            value={valor} onChange={(e) => setValor(e.target.value)}
          />
          <input
            type="number" placeholder="ID do Cliente"
            value={clienteId} onChange={(e) => setClienteId(e.target.value)}
          />
          <button onClick={salvarPedido}>{editandoId ? 'Atualizar Pedido' : 'Lançar Pedido'}</button>
        </section>
      </div>

      <section className="card" style={{gridColumn: '1 / -1'}}>
        <h2>Registro de Comandas</h2>
        <button className="refresh-btn" onClick={listarPedidos}>Sincronizar Lista</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Valor</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
  {pedidos.map(p => (
    <tr key={p.id}>
      <td>{p.id}</td>
      <td>{p.descricao}</td>
      <td>R$ {p.valorTotal.toFixed(2)}</td>
      <td>{p.clienteNome}</td>
      <td>
        {/* Mantém apenas este bloco de botões abaixo */}
        <button onClick={() => prepararEdicao(p)} className="btn-edit">EDITAR </button>
        <button onClick={() => deletarPedido(p.id)} className="btn-delete">DELETAR</button>
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </section>
    </div>
  );
}

export default App;