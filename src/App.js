import React from 'react';

import Header from './components/Header';
import Logo from './components/Logo';
import Button from './components/Button';
import Footer from './components/Footer';
import HighLight from './components/HightLight';


import './styles/settings/colors.css';
import './styles/reset.css';
import './styles/definitions.css';
import Link from './components/Link';

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Button>Novo Vídeo</Button>
      </Header>
      <Footer >
        <Logo />
        <p>
          Site feito na <HighLight>#Imersão React</HighLight> da 
         <Link href="https://alura.com.br"> Alura</Link>
        </p>
      </Footer>
    </>
  );
}

export default App;
