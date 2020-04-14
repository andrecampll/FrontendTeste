import styled, {  keyframes, css  } from 'styled-components';

export const translate = keyframes`
    from {
        transform: translateY(200px);
        opacity: 0;
    }

    to {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const opacityTransform = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const Container = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #fb5353;
    font-size: 15px;
    span {
      font-size: 15px !important;  
    }
    @media only screen and(min-width: 1804px) {
      
    }
  }

  a + button {
    margin-top: 10px !important;
  }

  p {
    font-size: 13px;
    font-weight: 400;
    color: #efefef;
    opacity: 0.65;
    @media only screen and (min-width: 1804px){
      font-size: 20px;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 32px;

    @media only screen and (min-width: 1804px) {
      font-size: 45px;    
    }
  }

  h3 {
    text-align: center;
    opacity: 0.5;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    @media only screen and (min-width: 1804px) {
      font-size: 25px;    
    }
  }
`;

export const AcceptButton = styled.button`
  width: 389px;
  height: 49px;
  border-radius: 7px;
  margin-top: 0px;
  margin-bottom: 20px;
  transition: all 0.2s;

  a {
    color: #ffffff;
    font-size: 19px;
    font-weight: 700;
  }

  
  background-color: #4dc30f;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  @media only screen and (min-width: 1804px) {
    width: 516px;
    height: 73px;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 20px;
    a {
      color: #ffffff;
      font-size: 25px !important;
      font-weight: 700 !important;
      letter-spacing: 0.5px;
    }
  }

  @media only screen and (max-width: 576px) {
    width: 75%;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const SellContainer = styled.div`
  width: 85%;
  max-width: 1596px;
  max-height: 518px;
  height: 335px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 30px;
  background-color: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 7px 0px 20px 0px;
  margin: 15px 0px;

  @media only screen and (max-width: 576px) {
    height: 240px;
    border-radius: 15px;
  }
 

  @media only screen and (min-width: 1804px) {
    max-height:526px;
    height: 440px;
    padding: 20px 0px;
    margin: 15px 0px;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
      width: 27px;
      margin-bottom: 6px;
    }

    @media only screen and (min-width: 1804px) { 
      svg {
        width: 35px;
      margin-bottom: 0px;
     }
    }
  }
  
  div {
    width: 100%;
    padding: 0 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      height: 30px;
    }
  }
  
  p {
    color: #fb5353;
    font-size: 17px;
    font-weight: 400;
    text-align: center;
    margin-left: 10px;
    opacity: 1 !important;
    strong {
      opacity: 1;
    }
    @media only screen and (min-width: 1804px){
      font-size: 25px;
      font-weight: 400;
      text-align: center;
      margin-left: 10px;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 38px;
    text-align: center;
    font-weight: 600;

    margin-top: 50px;
    margin-bottom: 10px;
    @media only screen and (min-width: 1804px) {
      font-size: 55px;
      margin-top: 70px;
      margin-bottom: 10px;      
    }
  }
`;

export const DownSellContainer = styled.div`
  width: 100%;
  height: 180px;
  @media only screen and (min-width: 1804px){
    height: 300px;
  }
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  opacity: 0;

  ${props => props.translate && css`
    & {
      animation: ${opacityTransform} 2s linear;
      opacity: 1;
    }
  `}
  
  p {
    color: #fb5353;
    margin-left: 10px;
    font-size: 17px;
    font-weight: 400;
    text-align: center;
    opacity: 1;
    @media only screen and (min-width: 1804px){
      font-size: 25px;
      font-weight: 400;
      text-align: center;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 38px;
    text-align: center;
    font-weight: 600;

    margin-top: 50px;
    margin-bottom: 10px;
    
    @media only screen and (min-width: 1804px) {
      font-size: 55px;
      margin-top: 90px;
      margin-bottom: 10px;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  background-color: #fb5353;

  height: 5px;
  margin-top: 0px;
  padding: 0px 20px;


  @media only screen and (min-width: 1804px){
    height: 7px;
    margin-top: 15px;
    padding: 0;
  }
`;

export const PromoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1596px;
  margin-top: 20px;
  opacity: 0;

  height: 585px;
  margin-bottom: 10px;
  width: 82%;
  padding: 0px 0px;

  @media only screen and (max-width: 576px) {
    height: 464px;
  }

  @media only screen and (min-width: 1440px){
    width: 80%;
  }

  @media only screen and (min-width: 1804px){
    width: 80%;
    margin-bottom: 120px; 
  }

  ${props => props.transformPromoOpacity && css`
    & {
      animation: ${opacityTransform} 2s linear;
      opacity: 1;
    }
  `}

  section {
    height: 500px;
    margin: 50px 21px 31px 0px;
    margin-right: 0px;
    @media (max-width: 1300px) {
      width: 50%;
      p {
        width: 100%;
      }

      h1 {
        width: 50%;
      }
    }

    @media only screen and (max-width: 576px) {
      width: 50%;
      margin-top: 0px;
      p {
        width: 100%;
      }
    }
    @media only screen and (min-width: 1804px){
      margin: 50px 24px;
      height: 0px;
    }
  }

  h1 {
    font-size: 36px;
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 10px;
    @media only screen and (min-width: 1804px){
      font-size: 51px;
    }
  }

  h2 {
    font-size: 22px;
    color: #3380ea;
    font-weight: 400;
    @media only screen and (min-width: 1804px){
      font-size: 31px;
    }
  }

  p {
    color: #ffffff;
    font-weight: 600;
    opacity: 0.8;
    margin-right: 0;

    margin-top: 28px;
    font-size: 14px;
    width: 579px;
    @media only screen and (min-width: 1804px){
      margin-top: 41px;
      font-size: 20px;
      width: 802px;
      
    }
  }

  div {
    margin-top: 10px;
    height: 724px;
    width: 50%;
    @media only screen and (min-width: 1804px) {
      width: 41%;
    }
  }
`;

export const Break = styled.div`
  width: 800px;
  height: 6px;
  background-color: #1c1c1c;
  margin: 55px 0px;
  @media only screen and (min-width: 1804px) {
    width: 999px;
    height: 7px;
  }

  @media only screen and (max-width: 576px) {
    width: 80%;
  }
`;

export const ExtensionContainer = styled.div`
  max-width: 1596px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 0px 30px 30px 0px;
  background-color: #0e0e0e;
  padding: 0px 115px 0px 0px;
  display: flex;
  flex-direction: row;
  opacity: 0;

  @media only screen and (max-width: 576px) {
    max-width: 55rem;
    padding: 0;
    height: 50%;
  }

  @media only screen and (min-width: 1804px) {
    width: 100%;
    height: 755px;
  }

  ${props => props.translate && css`
    & {
      animation: ${translate} 2s linear;
      opacity: 1;
    }
  `}


  section {
    margin-left: 66px;
    margin-top: 2%;
    height: 543px;
    div {
      color: #ffffff;
      font-size: 16px !important;
      margin-top: 16px;
      margin: 0px 0px;
      height: 400px;
    }
    @media only screen and (min-width: 1804px) {
      margin-left: 115px;
      margin-top: 73px;
      div {
        height: 500px;
      }
    }

    @media only screen and (max-width: 576px) {
      margin-left: 4%;
      margin-top: 2%;
      height: 92%;

      h1 {
        font-size: 1.6rem !important;
        margin-bottom: 0;
      }

      span {
        font-size: 1.6rem !important;
      }

      button {
        width: 50%;
        font-size: 1rem;
        margin-bottom: 1.3rem !important;
        margin-top: 1rem;
        height: 3rem;
        border-radius: 4px;
        a {
          font-size: 1.1rem;
        }
      }

      div {
        width: 100%;
        margin-bottom: 0;
        height: 86%;
        align-items: center;

        img {
          margin-right: 5%;
          width: 43% !important;
          height: 91% !important;
          margin-top: 12%;
          position: relative;
          bottom: 33px;
          left: 0px;
        }
        
        aside {
          width: 50%;
          margin-right: 0px;
          height: 100%;

          p {
            font-size: 0.8rem !important;
            margin-bottom: 0px;
          }

          p + p {
            margin-top: 3%;
          }
        }
      }
    }

    div + button {
      margin-bottom: 50px;
    }
  }
  
  h1 {
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 10px;
    @media only screen and (min-width: 1804px) {
      font-size: 35px;
      margin-bottom: 0px;
    }
  }

  span {
    font-size: 24px;
    color: #3380ea;
    font-weight: 600;
    text-decoration: none;
    @media only screen and (min-width: 1804px) {
      font-size: 35px;
    }
  }

  p {
    
    font-weight: 500;
    opacity: 0.9;

    color: #ffffff;
    font-size: 16px !important;
    margin-top: 16px;
    margin: 6px 0px;
    @media only screen and (min-width: 1804px) {
      color: #ffffff;
      font-size: 22px !important;
      margin-top: 16px;
      margin: 10px 0px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      position: relative;
      bottom: 60px;
      left: 8px;
    }
  }

  aside {
    display: flex;
    flex-direction: column;

    margin-right: 30px;
    width: 656px;
    @media only screen and (min-width: 1804px) {
      margin-right: 100px;
      width: 65%;
    }
  }

  aside + img {
    width: 275px;
    height: 404px;
    margin-top: 30px;
  }
  
  @media only screen and (min-width: 1804px) {
    aside + img {
      width: 362px;
      height: 500px;
      margin-top: 30px;
    }
  }
`;

export const Badge = styled.div`
  width: 13px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 30px 0 0 30px;
  background-color: ${props => props.color};
  @media only screen and (min-width: 1804px) {
    width: 25px;
  }
  @media only screen and (max-width: 576px) {
    width: 8%;
  }
`;

export const WrapperContent = styled.div`
  width: 85%;
  height: 580px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 65px;
  max-width: 1596px;
  @media only screen and (min-width: 1804px) {
    width: 1569px;
    height: 614px;
    margin-top: 50px;
    margin-bottom: 190px;
  }

  @media only screen and (max-width: 576px) {
    height: auto !important;
  }
`;

export const Footer = styled.footer`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (min-width: 1804px) {
    margin-top: 130px;
  }

  p {
    font-weight: 400;
    color: #ffffff;
    opacity: 0.75;
    height: 53px;
    font-size: 20px;
    text-decoration: underline;
    a {
      text-decoration: none;
      font-weight: 400;
      color: #ffffff;
      opacity: 0.75;
    }
  }

  h3 {
    color: #939393;
    font-size: 13px;
    margin-left: 8px;
  }

  div {
    display: flex;
    margin: 25px 0px;
    margin-bottom: 0px;
    @media only screen and (min-width: 1804px) {
    }
  }
`;