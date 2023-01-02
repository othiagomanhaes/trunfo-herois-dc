import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer id="footer-da-pag">
        <p id="texto-footer">
          Estas imagens foram retiradas desta
          <a
            href="https://akabab.github.io/superhero-api/api/glossary.html"
            target="_blank"
            rel="noreferrer"
          >
            { ' API. ' }
          </a>
          Para salvar uma carta, os pontos de Força,
          Poder e Inteligência, que inicialmente foram escolhidos por mim,
          não podem ultrapassar 210 pontos, quando somados.
          Os atributos, individualmente,
          não podem ser negativos ou serem superiores a 90 pontos.
        </p>
        <div id="div-linha" />
        <div id="div-img">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
            alt="logo insta"
            className="img-redes"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="logo linkedin"
            className="img-redes"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1322/1322053.png"
            alt="logo github"
            className="img-redes"
          />
        </div>
        <div id="div-redes">
          <a
            href="https://www.instagram.com/othiagomanhaes/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-manhaes/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="">Repositório do projeto no Github em breve</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
