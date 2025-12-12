import React from "react";
import { Link } from "react-router-dom";
import "./vinhos.css";
import imagemBanner from "./imagens/vinhosTopo.png";
import vinhoReservado from "./imagens/vinhoReservado.png";
import vinhoReservado2 from "./imagens/vinhoReservadoBlack.png";
import vinhoReservado3 from "./imagens/reservadoShiraz.png";
import imagemRefinado from "./imagens/refinado.png";
import imagemLogo from "./imagens/logoBaco.png";

export default function Vinhos() {
  return (
    <div className="containerVinhos"> 
    <div className="barrinhaDoTopo">
      <nav className="navTopinho">
        <input className="campo" type="text" placeholder="Campo de pesquisa" />

        {/* <h2 className="navLogo">Arca de Baco</h2> */}
        <ul className="navLinks">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/compra">Compra</Link></li>
          <li><Link to="/vinhos">Vinhos</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>


     <div className="bannerVinhos">
       <img src={imagemBanner} alt="garrafas de vinho" />
      </div>

      <div className="tituloVinhos">
        <img src={imagemLogo} alt="logo" className="logoTitulo" />
        <h2>Nossos Vinhos</h2>
      </div>

      <div className="cardsVinhos">
        
        <div className="cardVinho">
          <img src={vinhoReservado} alt="Vinho 1" />
          <span className="precoVinho">R$110</span>
          <p className="descricaoVinho">
            Um vinho encorpado com notas frutadas e final marcante.
          </p>
          <hr />
        </div>

        <div className="cardVinho">
          <img src={vinhoReservado2} alt="Vinho 2" />
          <span className="precoVinho">R$150</span>
          <p className="descricaoVinho">
            Elaborado com uvas selecionadas, ideal para ocasiões especiais.
          </p>
        </div>

        <div className="cardVinho">
          <img src={vinhoReservado3} alt="Vinho 3" />
          <span className="precoVinho">R$110</span>
          <p className="descricaoVinho">
            Suave, aromático e perfeito para harmonização refinada.
          </p>
        </div>

      </div>

      <div className="secaoRefinados">
        <img src={imagemRefinado} alt="vinho refinado" />

        <div className="textoRefinados">
          <h3>Refinados</h3>

          <p>
            Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente
            elaborados preenche o ar. Mergulhe na rica história e nos sabores
            requintados da nossa coleção cuidadosamente selecionada.
          </p>
        </div>
      </div>

      <div className="vinhosFooter">
        <img src={imagemLogo} alt="logo" className="logoFooter" />

        <div className="colunaFooter">
          <p>Sobre</p>
          <p>Home</p>
          <p>Opções</p>
          <p>Contatos</p>
        </div>

        <div className="colunaFooter">
          <p>Sobre</p>
          <p>Home</p>
          <p>Opções</p>
          <p>Contatos</p>
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
