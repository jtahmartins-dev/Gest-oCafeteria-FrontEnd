import './Poderes.css';

const poderes = [
  {
    icon: '👑',
    titulo: 'Haki do Conquistador',
    desc: 'Capaz de dominar a vontade de milhares instantaneamente. Sua versão avançada é rara a ponto de poucos no mundo perceberem a diferença.',
  },
  {
    icon: '👁️',
    titulo: 'Haki da Observação',
    desc: 'Nível mestre, permitindo prever o futuro próximo com precisão. Um dos pilares que faz de Shanks praticamente imbatível.',
  },
  {
    icon: '⚔️',
    titulo: 'Mestre Espadachim',
    desc: 'Combate de elite usando seu sabre Gryphon. Rivaliza com Mihawk — o maior espadachim do mundo — em duelos lendários.',
  },
  {
    icon: '🛡️',
    titulo: 'Haki do Armamento',
    desc: 'Defesa e ataque físico de nível imperial. Cada golpe carrega uma força capaz de destruir navios inteiros.',
  },
];

function Poderes() {
  return (
    <section className="poderes-page">
      <h2 className="page-title">Habilidades <span> Haki</span></h2>
      <div className="poderes-grid">
        {poderes.map((p) => (
          <div className="poder-card" key={p.titulo}>
            <span className="poder-icon">{p.icon}</span>
            <h3 className="poder-titulo">{p.titulo}</h3>
            <p className="poder-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Poderes;