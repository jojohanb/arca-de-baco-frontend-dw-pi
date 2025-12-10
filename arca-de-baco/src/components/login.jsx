import React from "react";
import "./login.css";
import imagemTaça from "../pages/imagens/imagemVinho.png";

export default function Login() {
  return (
    <div className="container-login">
      <div className="lado-esquerdo">
        <img src={imagemTaça} alt="taça de vinho" className="imagem-taca" />
      </div>

      <div className="lado-direito">
        <h1 className="titulo-login">LOGIN</h1>

        <div className="card-login">
          <label>Email</label>
          <input type="email" placeholder="Digite seu email" />

          <label>Senha</label>
          <input type="password" placeholder="Digite a senha" />

          <button className="botao-entrar">Entrar</button>

          <a href="#" className="link-recuperar-senha">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
}
