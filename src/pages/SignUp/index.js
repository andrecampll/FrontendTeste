import React from 'react';

import {
  Container, 
  Logo, 
  SignUpContent, 
  Divider, 
  Input,
  Button,
  Footer,
} from './styles';

import { FaRegUserCircle, FaRegEnvelope } from 'react-icons/fa';
import { TiKeyOutline } from 'react-icons/ti';
import { MdLockOutline } from 'react-icons/md';

import astron from '../../assets/logotipo.png';
import logo from '../../assets/logo-completa.png';

export default function pageOne() {
  return (
    <Container>
      <Logo src={logo} />

      <SignUpContent>
        <div>
          <h1>CRIE SUA CONTA</h1>
          <Divider />
        </div>

        <form>
          <div>
            <FaRegUserCircle size={30} color="#666"/>
            <Input placeholder="Seu nome completo..."/>
          </div>
          <div>
            <FaRegEnvelope size={30} color="#666" />
            <Input placeholder="Seu melhor E-mail..." type="email"/>
          </div>
          <div>
            <TiKeyOutline size={30} color="#666" />
            <Input placeholder="Seu Whatsapp com DDD..." />
          </div>

          <Button type="submit">Criar minha conta</Button>

          <div>
            <MdLockOutline size={18} color="#666" />
            <h2>Seus dados estão protegidos.</h2>
          </div>
        </form>
      </SignUpContent>

      <Footer>
        <p>Não gostamos e nem fazemos Spam. Todos os seus dados estão <br/>
        seguros e jamais serão compartilhados. Acesse <a href="#">Termos de Uso</a> ou <a href="#">Politicas de Privacidade</a>.
        </p>
        <div>
          <img src={astron} alt=""/>
          <h3>Tecnologia Grupo Astron®</h3>
        </div>
      </Footer>
    </Container>
  );
}
