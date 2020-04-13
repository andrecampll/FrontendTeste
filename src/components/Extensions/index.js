import React from 'react';

import CursoUm from '../../assets/CursoUm.png'
import CursoTres from '../../assets/CursoTres.png'
import CursoDois from '../../assets/CursoDois.png'

import { Container } from './styles';

export default function Extensions() {
  return (
    <Container>
      <div>
        <img src={CursoUm} alt="Curso" className="foto-1"/>
          <div> 
          <img src={CursoTres} alt="Curso" className="foto-2"/>
              <div>
                <img src={CursoDois} alt="Curso" className="foto-3"/>
              </div>
          </div>
      </div>
    </Container>
  );
}
