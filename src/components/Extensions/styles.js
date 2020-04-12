import styled from 'styled-components';

export const Container = styled.div`
  
  img + div {
    position: relative;
    bottom: 354px;
    left: 116px;
    height: 500px;

    @media only screen and (max-width: 576px) {
      bottom: 184px;
      left: 39px;
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
