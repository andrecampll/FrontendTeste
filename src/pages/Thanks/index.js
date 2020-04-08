import React from 'react';
import { Link } from 'react-router-dom';

import { Container, SellContainer, Divider, PromoContainer, Break, } from './styles';
import {AiOutlineExclamationCircle, AiOutlineCloseCircle} from 'react-icons/ai';

import CursoUm from '../../assets/CursoUm.png'
import CursoTres from '../../assets/CursoTres.png'
import CursoDois from '../../assets/CursoDois.png'


export default function Obrigado() {
  return (
    <Container>
      <p>Não se preocupe, sua conta já está ativa, você receberá seu acesso por E-mail… Enquanto isso, aproveite a oferta abaixo.</p>
    
      <SellContainer>
        <div>
          <AiOutlineExclamationCircle size={35} color="#fb5353"/>
          <p>Espere… Antes de continuar, acreditamos que isso possa te interessar.</p>
          
          <Link to="/">
            <AiOutlineCloseCircle size={30} color="#333333" />
          </Link>
        </div>

        <Divider />

        <h1>Compre junto este pacote de conteúdo <br/>
        com <span>50% de desconto</span> agora. </h1>
      
        <p><strong>Mas atenção!</strong> Esta é uma oferta única de <span>Boas-Vindas</span>. <br/> 
Portanto, se fechar esta pagina não poderá obtê-la novamente e perderá a oferta.</p>
      </SellContainer>

      <PromoContainer>
        <section>
          <h2>Pacote com 3 Extensões Exclusivas</h2>
          <h1>As 3 Principais Habilidades <br/>
          Mais Exigidas no Mundo Moderno.</h1>

          <p>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. <br/> <br/>

          Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada. <br/> <br/>

          Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. <br/>
          </p>
        </section>
      
        <div>
          <img src={CursoUm} alt="Curso"/>
           <div> 
            <img src={CursoTres} alt="Curso"/>
                <div>
                  <img src={CursoDois} alt="Curso"/>
                </div>
            </div>
        </div>
      </PromoContainer>

      <Link to="/"><span>Não obrigado, quero perder esta oferta.</span></Link>
      <button>Comprar Pacote Completo - R$ 67,00</button>
      <h3>Aviso: Esta extensão será adicionada a sua área de membros automaticamente. <br/>
      Você terá acesso a este curso por tempo vitalício (este curso não expira).</h3>
    
      <Break />
    </Container>
  );
}
