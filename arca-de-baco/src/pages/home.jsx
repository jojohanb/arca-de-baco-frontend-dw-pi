import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import logo from "./imagens/logoBaco.png";
import vinhos from "./imagens/vinhos.png";
import adega from "./imagens/adega.png";
import barricas from "./imagens/barricas.png";
import vinho1 from "./imagens/vinho1.png";
import vinho2 from "./imagens/vinho2.png";
import vinho3 from "./imagens/vinho3.png";
import vinho4 from "./imagens/vinho4.png";
import vinho5 from "./imagens/vinho5.png";
import vinho6 from "./imagens/vinho6.png";
import vinho7 from "./imagens/vinho7.png";
import vinho8 from "./imagens/vinho8.png";
import vinho9 from "./imagens/vinho9.png";  
import opVinho from "./imagens/opVinho.png";


export default function Home() {
  return (
    <div className="containerHome">
      <div className="barrinhaTopo">
  <input className="campoPesquisa" type="text" placeholder="Campo de pesquisa" />

  <nav className="navTopo">
    <ul className="navLinks">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/compra">Compra</Link></li>
      <li><Link to="/vinhos">Vinhos</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
</div>

      <div className="blocoTopo">
        <div className="textoTopo">
          <h1>ARCA DE BACO, OS MELHORES VINHOS SOMENTE AQUI</h1>
          <p>
            Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente elaborados
            preenche o ar. Mergulhe na rica história e nos sabores requintados da nossa
            coleção cuidadosamente selecionada.
          </p>
          <button className="btn">Saiba mais</button>
        </div>
        <div className="imagemTopo">
          <img src={vinhos} alt="imagem vinhos" />
        </div>
      </div>

      <div className="logo">
        <img src={logo} alt="logo da adega" className="logoImg" />
      </div>

      <div className="adega">
        <img src={adega} alt="imagem adega" className="adegaImg" />
      </div>

      <div className="containerSobre">
        <h2>Arca De Baco</h2>
        <div className="colunaSobre">
          <p>Explore a essência dos grandes vinhos, onde cada garrafa revela tradição, arte e paixão. Permita-se viajar por aromas envolventes e sabores que atravessam gerações. Viva a experiência de degustar rótulos escolhidos com o mais alto cuidado.</p>
          <p>Em nossa adega, cada vinho conta uma história que começa na terra e termina no seu paladar. Delicie-se com uma seleção refinada que combina elegância e autenticidade. Sinta a magia dos sabores que celebram o melhor da viticultura mundial.</p>
          <p>Aprecie vinhos que encantam desde o primeiro aroma até o último gole. Nossa coleção reúne rótulos exclusivos que exaltam tradição, técnica e excelência. Descubra sensações únicas em cada detalhe desta viagem sensorial.</p>
        </div>
      </div>
      <div className="ReferenciaVinhos">
        <img className="OpVinhos" src={opVinho} alt="Opvinhos" />

      </div>
      
      <div className="galeriaVinhos">
        <div className="gridVinhos">
          <img src={vinho1} alt="Vinho 1" />
          <img src={vinho2} alt="Vinho 2" />
          <img src={vinho3} alt="Vinho 3" />
          <img src={vinho4} alt="Vinho 4" />
          <img src={vinho5} alt="Vinho 5" />
          <img src={vinho6} alt="Vinho 6" />
          <img src={vinho7} alt="Vinho 7" />
          <img src={vinho8} alt="Vinho 8" />
          <img src={vinho9} alt="Vinho 9" />
        </div>
      </div>

      <div className="containerExplore">
        <div className="imagemExplore">
          <img src={barricas} alt="imagem barricas" className="imagemExplore" />
        </div>
        <div className="explore">
          <img src={logo} alt="logo da adega" className="logoExplore" />
          <h2>Explore nossa coleção</h2>
          <p>
            Descubra os melhores vinhos de todo o mundo, cuidadosamente selecionados e
            meticulosamente cuidados em nossa adega de última geração.
          </p>
        </div>
      </div>

      <div className="barraContatos">
        <p>Entre em contato</p>
        <div className="iconesSociais">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>

      <div className="footer">
        <div className="logoFooter">
          <img src={logo} alt="logo da adega" className="logoFooter" />
        </div>
        <div className="colunaFooter">
          <p>Sobre</p>
          <p>Home</p>
          <p>Opções</p>
          <p>Contatos</p>
        </div>
      </div>
    </div>
  );
}
