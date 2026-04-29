import './Home.css';

function Home() {
  return (
    <section className="home-page">
      <div className="home-intro">
        <p>
          Shanks é o homem que inspirou Monkey D. Luffy a seguir o caminho da
          pirataria e o dono original do icônico Chapéu de Palha. Como um dos
          Quatro Imperadores que governam o Novo Mundo, ele é conhecido por sua
          natureza calma e festiva, que esconde um poder avassalador capaz de
          dividir os céus e interromper guerras inteiras apenas com sua voz.
        </p>
      </div>

      <div className="home-card">
        <h2 className="home-name">Shanks <span>O Ruivo</span></h2>

        <div className="home-info">
          <div className="info-row">
            <span className="info-label">Título</span>
            <span className="info-value">Yonkou — Imperador do Mar</span>
          </div>
          <div className="info-row">
            <span className="info-label">Afiliação</span>
            <span className="info-value">Capitão dos Piratas do Ruivo</span>
          </div>
          <div className="info-row">
            <span className="info-label">Recompensa</span>
            <span className="info-value reward">☽ 4.048.900.000 Berries</span>
          </div>
          <div className="info-row">
            <span className="info-label">Arma</span>
            <span className="info-value">Gryphon — Sabre de classe lendária</span>
          </div>
          <div className="info-row">
            <span className="info-label">Habilidades</span>
            <span className="info-value">
              Haki do Conquistador (Avançado), Haki do Armamento,
              Haki da Observação, Mestre Espadachim
            </span>
          </div>
          <div className="info-row">
            <span className="info-label">Cicatriz</span>
            <span className="info-value">
              Três cortes no olho esquerdo causados por Marshall D. Teach
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;