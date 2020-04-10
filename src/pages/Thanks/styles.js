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
    @media only screen and(max-width: 2000px) {
      span {
        font-size: 15px !important;
        
      }
    }
  }

  a + button {
    margin-top: 10px !important;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #efefef;
    opacity: 0.65;
    @media only screen and (max-width: 2000px){
      font-size: 13px;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 45px;
    @media only screen and (max-width: 2000px) {
      font-size: 32px;
    }
  }

  h3 {
    text-align: center;
    opacity: 0.5;
    color: #ffffff;
    font-size: 25px;
    font-weight: 700;
    @media only screen and (max-width: 2000px) {
      font-size: 18px;
    }
  }
`;

export const AcceptButton = styled.button`
  width: 516px;
  height: 73px;
  border-radius: 10px;
  background-color: #4dc30f;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 2000px) {
    width: 389px;
    height: 49px;
    border-radius: 7px;
    margin-top: 0px;
    margin-bottom: 20px;
    a {
      color: #ffffff !important;
      font-size: 19px !important;
      font-weight: 700 !important;
    }
  }
  a {
    color: #ffffff;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  transition: all 0.2s;
  margin-top: 15px;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

export const SellContainer = styled.div`
  width: 85%;
  max-width: 1596px;
  max-height:526px;
  height: 440px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 30px;
  background-color: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  margin: 15px 0px;

  @media only screen and (max-width: 2000px) {
    max-height: 518px;
    height: 335px;
    padding: 7px 0px 20px 0px;
    margin: 15px 0px;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 2000px) {
      svg {
        width: 27px;
        margin-bottom: 6px;
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
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    margin-left: 10px;
    opacity: 1 !important;
    strong {
      opacity: 1;
    }
    @media only screen and (max-width: 2000px){
      font-size: 17px;
      font-weight: 400;
      text-align: center;
      margin-left: 10px;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 55px;
    text-align: center;
    font-weight: 600;
    margin-top: 70px;
    margin-bottom: 10px;
    @media only screen and (max-width: 2000px) {
      font-size: 38px;
      margin-top: 50px;
      margin-bottom: 10px;
    }
  }
`;

export const DownSellContainer = styled.div`
  width: 100%;
  height: 300px; 
  @media only screen and (max-width: 2000px){
    height: 180px;
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
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    opacity: 1;
    @media only screen and (max-width: 2000px){
      font-size: 17px;
      font-weight: 400;
      text-align: center;
      margin-left: 10px;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 55px;
    text-align: center;
    font-weight: 600;
    margin-top: 90px;
    margin-bottom: 10px;
    @media only screen and (max-width: 2000px) {
      font-size: 38px;
      margin-top: 50px;
      margin-bottom: 10px;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 7px;
  background-color: #fb5353;
  margin-top: 15px;

  @media only screen and (max-width: 2000px){
    padding: 0px 20px;
    height: 5px;
    margin-top: 0px;
  }
`;

export const PromoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 271px;
  justify-content: space-between;
  max-width: 1596px;
  width: 80%;
  margin-top: 20px;
  margin-bottom: 120px;
  opacity: 0;

  @media only screen and (max-width: 2000px){
    height: 585px;
    margin-bottom: 10px;
    width: 82%;
  }

  ${props => props.transformPromoOpacity && css`
    & {
      animation: ${opacityTransform} 2s linear;
      opacity: 1;
    }
  `}

  section {
    margin: 50px 24px;
    @media only screen and (max-width: 2000px){
      height: 500px;
      margin: 50px 35px 31px 0px;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 51px;
    font-weight: 600;
    margin-bottom: 10px;
    @media only screen and (max-width: 2000px){
      font-size: 36px;
    }
  }

  h2 {
    color: #3380ea;
    font-size: 31px;
    font-weight: 400;
    @media only screen and (max-width: 2000px){
      font-size: 22px;
    }
  }

  p {
    margin-top: 41px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    width: 802px;
    opacity: 0.8;
    margin-right: 0;
    @media only screen and (max-width: 2000px){
      margin-top: 28px;
      font-size: 14px;
      width: 579px;
    }
  }

  div {
    margin-top: 10px;
    height: 724px;
  }
`;

export const Break = styled.div`
  width: 999px;
  height: 7px;
  background-color: #1c1c1c;
  margin: 55px 0px;
  @media only screen and (max-width: 2000px) {
    width: 800px;
    height: 6px;
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

  ${props => props.translate && css`
    & {
      animation: ${translate} 2s linear;
      opacity: 1;
    }
  `}


  section {
    margin-left: 115px;
    margin-top: 73px;
    div {
      height: 500px;
    }
    @media only screen and (max-width: 2000px) {
      margin-left: 66px;
      margin-top: 41px;
      height: 543px;
      div {
        color: #ffffff;
        font-size: 16px !important;
        margin-top: 16px;
        margin: 0px 0px;
        height: 400px;
      }
    }

    div + button {
      margin-bottom: 50px;
    }
  }
  
  h1 {
    color: #ffffff;
    font-size: 35px;
    font-weight: 600;
    @media only screen and (max-width: 2000px) {
      font-size: 24px;
      margin-bottom: 10px;
    }
  }

  span {
    color: #3380ea;
    font-size: 35px;
    font-weight: 600;
    text-decoration: none;
    @media only screen and (max-width: 2000px) {
      font-size: 24px;
    }
  }

  p {
    color: #ffffff;
    font-size: 22px;
    margin-top: 16px;
    font-weight: 500;
    margin: 10px 0px;
    opacity: 0.9;
    @media only screen and (max-width: 2000px) {
      color: #ffffff;
      font-size: 16px !important;
      margin-top: 16px;
      margin: 6px 0px;
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

    margin-right: 100px;
    @media only screen and (max-width: 2000px) {
      margin-right: 30px;
      width: 656px;
    }
  }

  @media only screen and (max-width: 2000px) {
    aside + img {
      width: 275px;
      height: 404px;
      margin-top: 30px;
    }
  }
`;

export const Badge = styled.div`
  width: 25px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 30px 0 0 30px;
  background-color: ${props => props.color};
  @media only screen and (max-width: 2000px) {
    width: 13px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 65px;
  max-width: 1596px;
  @media only screen and (max-width: 2000px) {
    width: 85%;
    height: 580px;
  }
`;

export const Footer = styled.footer`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 2000px) {
    margin-top: 50px;
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
    @media only screen and (max-width: 2000px) {
      margin-bottom: 0px;
    }
  }
`;