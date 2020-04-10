import styled from 'styled-components';

export const Container = styled.div`
  
  img + div {
    position: relative;
    bottom: 430px;
    left: 133px;
    height: 500px;
    @media only screen and (max-width: 2000px) {
      bottom: 354px;
      left: 116px;
      height: 500px;
    }
  }

  img {
    width: 345px;
    height: 499px;
    @media only screen and (max-width: 2000px) {
      width: 275px;
      height: 404px;
    }
  }
`;
