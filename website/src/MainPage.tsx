import waspLogo from './waspLogo.png'
import './Main.css'

export const MainPage = () => {
  return (
    <div className="container">
      <main>
        <div className="logo">
          <img src={waspLogo} alt="wasp" />
        </div>

        <h2 className="welcome-title">
          Bienvenido a Lexia!
        </h2>
        <h3 className="welcome-subtitle">
          Tu plataforma de Inteligencia Artificial para el ámbito legal
        </h3>

        <div className="buttons">
          <a
            className="button button-filled"
            href="https://www.youtube.com/watch?v=_yRJsecDjjc"
            target="_blank"
            rel="noreferrer noopener"
          >
            Solicitar Demo
          </a>
          <a
            className="button button-outline"
            href="https://www.youtube.com/watch?v=_yRJsecDjjc"
            target="_blank"
            rel="noreferrer noopener"
          >
            Prueba Gratis
          </a>
        </div>
      </main>
    </div>
  )
}
