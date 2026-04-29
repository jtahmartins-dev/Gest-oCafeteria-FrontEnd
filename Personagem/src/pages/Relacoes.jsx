import './Relacoes.css';

const aliados = [
  { nome: 'Monkey D. Luffy', emoji: '🎩', desc: 'O garoto que salvou e a quem confiou o Chapéu de Palha.' },
  { nome: 'Gol D. Roger', emoji: '💀', desc: 'Seu antigo capitão e mentor. A origem de tudo que Shanks é.' },
  { nome: 'Benn Beckman', emoji: '🎯', desc: 'Braço direito fiel, considerado um dos homens mais inteligentes do Novo Mundo.' },
];

const inimigos = [
  { nome: 'Marshall D. Teach', emoji: '🖤', desc: 'O homem que causou as três cicatrizes no rosto de Shanks.' },
  { nome: 'Dracule Mihawk', emoji: '🗡️', desc: 'Eterno rival em duelos de esgrima que abalavam o Novo Mundo.' },
  { nome: 'Governo Mundial', emoji: '⚖️', desc: 'Uma relação tensa de respeito armado e cautela mútua.' },
];

function Relacoes() {
  return (
    <section className="relacoes-page">
      <h2 className="page-title">Conexões no <span>Novo Mundo</span></h2>

      <div className="relacoes-grid">
        <div className="rel-group">
          <h3 className="rel-group-title aliados-title">⚓ Aliados | Inspirações</h3>
          {aliados.map((r) => (
            <div className="rel-item" key={r.nome}>
              <span className="rel-emoji">{r.emoji}</span>
              <div>
                <strong>{r.nome}</strong>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rel-group">
          <h3 className="rel-group-title inimigos-title">⚔️ Rivais | Inimigos</h3>
          {inimigos.map((r) => (
            <div className="rel-item" key={r.nome}>
              <span className="rel-emoji">{r.emoji}</span>
              <div>
                <strong>{r.nome}</strong>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Relacoes;