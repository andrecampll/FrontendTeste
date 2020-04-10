import React from 'react';

import { UpsellContainer, Break, AcceptButton } from './styles';

import Extensions from '../Extensions';

export default function Upsell() {
  return (
    <UpsellContainer>
        <h1>Ou compre agora o pacote completo <br/>
        com <span>50% de desconto</span>. </h1>

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
              Você terá acesso a este curso por tempo vitalício (este curso não expira).
              </p>
            </aside>
            <div>
              <Extensions />
            </div>
          </div>
          <AcceptButton>Adicionar ao Pedido - R$ 27,90</AcceptButton>
        </section>
      </UpsellContainer>
  );
}
