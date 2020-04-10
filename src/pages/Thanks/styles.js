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
    font-size: 20px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #efefef;
    opacity: 0.65;
  }

  h1 {
    color: #ffffff;
    font-size: 45px;
  }

  h3 {
    text-align: center;
    opacity: 0.5;
    color: #ffffff;
    font-size: 25px;
    font-weight: 700;
  }
`;

export const AcceptButton = styled.button`
  width: 516px;
  height: 73px;
  border-radius: 10px;
  background-color: #4dc30f;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
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

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
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
    strong {
      opacity: 1;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 55px;
    text-align: center;
    font-weight: 600;
    margin-top: 70px;
    margin-bottom: 10px;
  }
`;

export const DownSellContainer = styled.div`
  width: 100%;
  height: 255px;
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
    strong {
      opacity: 1;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 55px;
    text-align: center;
    font-weight: 600;
    margin-top: 90px;
    margin-bottom: 10px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 7px;
  background-color: #fb5353;
  margin-top: 15px;
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

  ${props => props.transformPromoOpacity && css`
    & {
      animation: ${opacityTransform} 2s linear;
      opacity: 1;
    }
  `}

  section {
    margin: 50px 24px;
  }

  h1 {
    color: #ffffff;
    font-size: 51px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  h2 {
    color: #3380ea;
    font-size: 31px;
    font-weight: 400;
  }

  p {
    margin-top: 41px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    width: 802px;
    opacity: 0.8;
    margin-right: 0;
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
  }
  
  h1 {
    color: #ffffff;
    font-size: 35px;
    font-weight: 600;
  }

  span {
    color: #3380ea;
    font-size: 35px;
    font-weight: 600;
    text-decoration: none;
  }

  p {
    color: #ffffff;
    font-size: 22px;
    margin-top: 16px;
    font-weight: 500;
    margin: 10px 0px;
    opacity: 0.9;
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
  }
`;

export const Badge = styled.div`
  width: 25px;
  height: 791px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 30px 0 0 30px;
  background-color: ${props => props.color};
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 65px;
  max-width: 1596px;
`;

export const Footer = styled.footer`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

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
  }
`;