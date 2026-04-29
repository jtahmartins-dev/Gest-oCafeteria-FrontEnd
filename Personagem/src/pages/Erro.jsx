import { Link } from 'react-router-dom';
import './Erro.css';

function Erro() {
  return (
    <section className="erro-page">
      <div className="erro-card">
        <span className="erro-code">404</span>
        <h2 className="erro-title">Página Inválida</h2>
        <p className="erro-desc">Você entrou em uma rota inexistente no Novo Mundo.</p>
        <Link to="/" className="erro-link">← Voltar para o início</Link>
      </div>
    </section>
  );
}

export default Erro;