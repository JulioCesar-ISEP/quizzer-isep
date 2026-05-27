// src/components/ui/Footer.jsx
import React from 'react';
import '../../styles/ui/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ape-footer">
      <div className="ape-footer-content">
        <div className="ape-footer-section">
          <h3>Quizzer ISEP</h3>
          <p>Laboratório de aprendizagem interativa</p>
          <p>Desenvolvido para estudantes de engenharia</p>
        </div>
        
        <div className="ape-footer-section">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#cadeiras">Cadeiras</a></li>
            <li><a href="#quiz">Exercícios</a></li>
            <li><a href="#arvore">Árvore de Conhecimento</a></li>
          </ul>
        </div>
        
        <div className="ape-footer-section">
          <h4>Suporte</h4>
          <ul>
            <li><a href="#ajuda">Ajuda</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </div>
        
        <div className="ape-footer-section">
          <h4>Desenvolvimento</h4>
          <p>ISEP - Instituto Superior de Engenharia do Porto</p>
          <p>Projeto de Laboratório de Aprendizagem</p>
        </div>
      </div>
      
      <div className="ape-footer-bottom">
        <p>&copy; {currentYear} Quizzer ISEP. Todos os direitos reservados.</p>
        <p>Desenvolvido com 💛 para a comunidade estudantil</p>
      </div>
    </footer>
  );
};

export default Footer;