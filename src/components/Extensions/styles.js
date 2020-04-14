import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1300px) {
    .foto-1 {
      width: 16rem;
      height: 23rem;
    }

    .foto-2 {
      width: 16rem;
      height:23rem;
    }

    .foto-3 {
      width: 16rem;
      height:23rem;
    }
  }

  img + div {
    position: relative;
    bottom: 354px;
    left: 116px;
    height: 500px;
    width: 79%;

    @media only screen and (max-width: 576px) {
      bottom: 184px;
      left: 24px;
      height: 500px;
    }
    
    @media only screen and (min-width: 1804px) {
      bottom: 430px;
      left: 133px;
      height: 500px;
    }
  }

  img {
    width: 275px;
    height: 404px;
    @media only screen and (min-width: 1804px) {  
      width: 345px;
      height: 499px;
    }
  }
`;
