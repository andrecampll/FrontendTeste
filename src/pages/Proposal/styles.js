import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #fb5353;
    font-size: 20px;
    @media only screen and (max-width: 2000px) {
      font-size: 15px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #efefef;
    opacity: 0.65;
    @media only screen and (max-width: 2000px) {
      font-size: 15px;
    }
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

export const UpsellContainer = styled.div`
  width: 100%;
  max-width: 1596px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 30px;
  border: 7px solid #79d152;
  background-color: #0e0e0e;
  margin-top: 100px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 115px;

  @media only screen and (max-width: 2000px) {
    width: 85%;
    margin-top: 45px;
    padding: 0 60px;
  }
  
  h1 {
    margin-top: 69px;
    font-size: 55px;
    text-align: center;
    @media only screen and (max-width: 2000px) {
      margin-top: 60px;
      font-size: 40px;
    }
  }

  aside > h1 {
    color: #ffffff;
    font-size: 35px;
    font-weight: 600;
    text-align: start;

    @media only screen and (max-width: 2000px) {
      font-size: 25px;
    }
  }

  h1 + p {
    color: #fb5353;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    opacity: 1;
    @media only screen and (max-width: 2000px) {
      font-size: 17px;
    }
  }

  aside {
    height: 346px;
    margin-right: 139px;
    @media only screen and (max-width: 2000px) {
      margin-right: 50px;
      height: 429px;
    }
  }

  aside + div {
    position: relative;
    margin-top: 5%;
    bottom: 6%;
  }

  aside > p {
    margin-top: 41px;
    width: 774px;
    color: #ffffff;
    font-size: 19px;
    font-weight: 600;
    opacity: 0.8;
    text-align: start;
    margin-bottom: 40px;
    @media only screen and (max-width: 2000px) {
      margin-top: 22px;
      width: 585px;
      font-size: 14px;
    }
  }

  section {
    padding-bottom: 30px;
    height: 100%;
    width: 100%;
    @media only screen and (max-width: 2000px) {
      margin-top: 0px;
    }
  }

  section > div {
    display: flex;
    flex-direction: row;
    height: 535px;
    @media only screen and (max-width: 2000px) {
      margin-top: 40px;
      height: 399px;
    }
  }
`;

export const ExtensionsContainer = styled.div`
  
  div + div {
    position: relative;
    bottom: 355px;
    left: 125px;
    height: 500px;
    @media only screen and (max-width: 2000px) {
      left: 100px;
    }
  }

  img {
    width: 345px;
    height: 499px;
    @media only screen and (max-width: 2000px) {
      width: 280px;
      height: 411px;
    }
  }
`;


export const Footer = styled.footer`
  margin-top: 50px;
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
    @media only screen and (max-width: 2000px) {
      margin: 0px;
    }
  }
`;


export const AcceptButton = styled.button`
  width: 516px;
  height: 73px;
  border-radius: 10px;
  background-color: #4dc30f;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.2s;
  margin-top: 30px;
  margin-bottom: 81px;

  @media only screen and (max-width: 2000px) {
    width: 389px;
    height: 49px;
    border-radius: 7px;
    font-size: 19px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Break = styled.div`
  width: 909px;
  height: 7px;
  background-color: #1c1c1c;
  margin-top: 45px;
  margin-bottom: 0px;

  @media only screen and (max-width: 2000px) {
    width: 641px;
  }
`;