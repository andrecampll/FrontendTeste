import React from 'react';

import { Container, Footer, Break, AcceptButton, Upsell } from './styles';

import Extensions from '../../components/Extensions';

import astron from '../../assets/logotipo.png'

export default function Proposal() {
  return (
    <Container>
      <p>Não se preocupe, sua conta já está ativa, você receberá seu acesso por E-mail… Enquanto isso, aproveite a oferta abaixo.</p>
      <Upsell>
        <h1>Que tal comprar o restante do pacote <br/>
        com mais 60% de desconto? </h1>

        <p><strong>Mas atenção!</strong> Esta é uma oferta única de <span>Boas-Vindas</span>. <br/> 
        Portanto, se fechar esta pagina não poderá obtê-la novamente e perderá a oferta.</p>

        <Break />

        <section>
          <div>
            <aside>
              <h2>As 3 Principais Habilidades Mais Exigidas no <br/>
              Mundo Moderno.</h2>

              <p>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. <br/> <br/>

              Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada. <br/> <br/>

              Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. <br/>
              </p>
            </aside>
            <Extensions />
          </div>
          <AcceptButton>Adicionar ao Pedido - R$ 27,90</AcceptButton>
        </section>
      </Upsell>
      <Footer>
        <p>
          <a href="#">Termos de Uso e</a><a href="#"> Politicas de Privacidade.</a>
        </p>
        <div>
          <img src={astron} alt=""/>
          <h3>Tecnologia Grupo Astron®</h3>
        </div>
      </Footer>
    </Container>
  );
}
