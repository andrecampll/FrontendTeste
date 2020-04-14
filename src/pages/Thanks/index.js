import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  SellContainer,
  Divider,
  PromoContainer,
  Break,
  AcceptButton,
  ExtensionContainer,
  Badge,
  WrapperContent,
  DownSellContainer,
  Footer,
} from './styles';

import Extensions from '../../components/Extensions';
import Upsell from '../../components/Upsell';

import CursoUm from '../../assets/CursoUm.png'
import CursoTres from '../../assets/CursoTres.png'
import CursoDois from '../../assets/CursoDois.png'
import astron from '../../assets/logotipo.png'

import {AiOutlineExclamationCircle, AiOutlineCloseCircle} from 'react-icons/ai';

export default function Thanks() {
  const [translate, setTranslate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [transformPromoOpacity, setTransformPromoOpacity] = useState(false);

  const [downSell, setDownSell] = useState(false);
  const [styles, setStyles] = useState([{
    color:"#fb5353", image: CursoDois,
  }, {
    color:"#7ad6c2", image: CursoTres,
  }, {
    color:"#a89b8e", image: CursoUm,
  }]);

  const nome = localStorage.getItem('nome');

  function handleDownSell() {
    setDownSell(true);
    setTranslate(true);
    return true;
  }

  function handleTranslate() {
    if (transformPromoOpacity === true && translate === true) {
      return false;
    }
    else {
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled > 196 && transformPromoOpacity === false) {
          return setTransformPromoOpacity(true);
        }
        if (scrolled > 1121 && translate === false){
          return setTranslate(true);
        }
      });
    }
  }
  
  handleTranslate();

  return (

    <Container >
      
      <p>Não se preocupe, {nome}, sua conta já está ativa, você receberá seu acesso por E-mail… Enquanto isso, aproveite a oferta abaixo.</p>

      { downSell ? (
        <DownSellContainer translate={translate} >
          <h1>Antes de ir, o que acha de adicionar <br/>
          algumas extensões separadas?</h1>
        
          <p><strong>Mas atenção!</strong> Esta é uma oferta única de <span>Boas-Vindas</span>. <br/> 
          Portanto, se fechar esta pagina não poderá obtê-la novamente e perderá a oferta.</p>
        </DownSellContainer>
      ) : (
        <>
          <SellContainer>
            <div>
              <p></p>
              <header>
                <AiOutlineExclamationCircle size={35} color="#fb5353"/>
                <p>Espere… Antes de continuar, acreditamos que isso possa te interessar.</p>
              </header>
              
              <Link onClick={handleDownSell}>
                <AiOutlineCloseCircle size={30} color="#333333" />
              </Link>
            </div>

          <Divider />

          <h1>Compre junto este pacote de conteúdo <br/>
          com <span>50% de desconto</span> agora. </h1>
        
          <p><strong>Mas atenção!</strong> Esta é uma oferta única de <span>Boas-Vindas</span>. <br/> 
          Portanto, se fechar esta pagina não poderá obtê-la novamente e perderá a oferta.</p>
          </SellContainer>

          <PromoContainer transformPromoOpacity={transformPromoOpacity}>
            <section>
              <h2>Pacote com 3 Extensões Exclusivas</h2>
              <h1>As 3 Principais Habilidades <br/>
              Mais Exigidas no Mundo Moderno.</h1>

              <p>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. <br/> <br/>

              Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada. <br/> <br/>

              Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. <br/>
              </p>
            </section>
          
            <Extensions />
          </PromoContainer>

          <Link onClick={handleDownSell}><span>Não obrigado, quero perder esta oferta.</span></Link>
          
          <AcceptButton>
            <Link to="/">Comprar Pacote Completo - R$ 67,00</Link>
          </AcceptButton>
          <h3>Aviso: Esta extensão será adicionada a sua área de membros automaticamente. <br/>
          Você terá acesso a este curso por tempo vitalício (este curso não expira).</h3>
        
          <Break />

          <h1>Ou se preferir, compre separado.</h1>
          <h3>Compre extensões de conteúdos separadas, porém pelo valor original e sem o <br/>
          desconto promocional.
          </h3>
        </>
      )}
      
      {styles.map(style => (
        <WrapperContent>
        <ExtensionContainer translate={translate}>
          <Badge color={style.color} />
          <section>
            <h1><span>Estoicismo:</span> A arte de não sofrer.</h1>
            
              <div>
                <aside>
                  <p>
                    Ao contrário do que se acredita,
                    Lorem Ipsum não é simplesmente um texto randômico.
                    Com mais de 2000 anos,
                    suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC.
                  </p>

                  <p>
                    Ao contrário do que se acredita,
                    Lorem Ipsum não é simplesmente um texto randômico.
                    Com mais de 2000 anos,
                    suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC.
                  </p>
                  
                  <p>
                    Ao contrário do que se acredita,
                    Lorem Ipsum não é simplesmente um texto randômico.
                    Com mais de 2000 anos,
                    suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC.
                  </p>

                  <p>Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica data.</p>

                  <p><strong>Aviso:</strong> Esta extensão será adicionada a sua área de membros automaticamente. Você <br/>
                  terá acesso a este curso por tempo vitalício (este curso não expira).</p>
                </aside>
                <img src={style.image} alt=""/>
              </div>
            <AcceptButton>
              <Link to={{
                pathname: "/proposal",
                state: styles.indexOf(style),
              }}>
                Adicionar ao Pedido - R$ 27,90
              </Link>
            </AcceptButton>
            </section>
          </ExtensionContainer>
        </WrapperContent>
      ))}

      {downSell ? (<></>):(<Upsell />)}

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
