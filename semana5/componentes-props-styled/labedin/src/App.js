import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import PerfilImagem from './components/imgs/perfil.jpg';
import LabenuImg from './components/imgs/labenu.png';
import UFFImg from './components/imgs/uff2.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={PerfilImagem}
          nome="Pedro Stefani Saldanha" 
          descricao="Pode me chamar de Peu. Sou nascido e criado no Rio de Janeiro, Brasil. Me formei na faculdade de Cinema e Audiovisual pela Universidade Federal Fluminense (UFF) e no momento tento entrar na área de tecnologia com o curso full stack da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande 
          imagem={LabenuImg} 
          nome="Labenu" 
          descricao="No fim de março iniciei o curso Full Stack de Web Dev da Labenu. Serão seis meses de muito aprendizado, passando por HTML, CSS, JavaScript, React e mais coisas relacionades ao universo de tecnologia e programação." 
        />
        
        <CardGrande 
          imagem={UFFImg} 
          nome="Universidade Federal Fluminense" 
          descricao="Bacharel em Cinema e Audiovisual pela UFF. Para a conclusão do curso precisei realizar um curta metragem em equipe e um TCC individual. No meu caso, ambos projetos finais foram focados no universo da animação." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
