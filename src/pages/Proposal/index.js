import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ExtensionsContainer, Footer, Break, AcceptButton } from './styles';
import { UpsellContainer } from './styles';


import CursoUm from '../../assets/CursoUm.png'
import CursoTres from '../../assets/CursoTres.png'
import CursoDois from '../../assets/CursoDois.png'

import astron from '../../assets/logotipo.png'

export default function Proposal(styles) {
  const { state } = styles.location;
  const photos = [CursoDois, CursoTres, CursoUm];

  photos.splice(state, 1);

  console.log(state);
  return (
    <Container>
      <p>Não se preocupe, sua conta já está ativa, você receberá seu acesso por E-mail… Enquanto isso, aproveite a oferta abaixo.</p>
      
      <UpsellContainer>
        <h1>Que tal comprar o restante do pacote <br/>
        com mais <span>60% de desconto</span>? </h1>

        <p><strong>Mas atenção!</strong> Esta é uma oferta única de <span>Boas-Vindas</span>. <br/> 
        Portanto, se fechar esta pagina não poderá obtê-la novamente e perderá a oferta.</p>

        <Break />

        <section>
          <div>
            <aside>
              <h1>As 3 Principais Habilidades Mais Exigidas no <br/>
              Mundo Moderno.</h1>

              <p>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. <br/> <br/>

              Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada. <br/> <br/>

              Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. <br/> <br/>
              
              Aviso: Esta extensão será adicionada a sua área de membros automaticamente.
              Você <br/> terá acesso a este curso por tempo vitalício (este curso não expira).
              </p>
            </aside>
            <div>
              <ExtensionsContainer>
                {
                  photos.map(extension => (
                    <div>
                      <img src={extension} alt="Curso"/>
                    </div>
                  ))
                }
              </ExtensionsContainer>
            </div>
          </div>
          <AcceptButton>Adicionar ao Pedido - R$ 32,90</AcceptButton>
        </section>
      </UpsellContainer>

      <Link to="/Obrigado"><span>Não obrigado, quero perder esta oferta.</span></Link>

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
