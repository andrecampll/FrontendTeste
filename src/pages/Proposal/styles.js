import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;

  a {
    color: #fb5353;
    @media only screen and (min-width: 1804px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 15px;
    font-weight: 400;
    color: #efefef;
    opacity: 0.65;
    @media only screen and (min-width: 1804px) {
      font-size: 20px;
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
  max-width: 1596px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 30px;
  border: 7px solid #79d152;
  background-color: #0e0e0e;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 85%;
  margin-top: 45px;
  padding: 0 60px;

  @media (max-width: 576px) {
    width: 90%;
    padding: 0 4%;
    padding-bottom: 3%;
    padding-left: 6%;
    border: 4px solid #79d152;

    h1 {
      margin-bottom: 1%;
    }

    section {
      div {
        margin-top: 4% !important;

        aside {
         width: 65%;
         height: auto;
        }

        aside > h1 {
          width: 80%;
        }

        aside > p {
          width: 86%;
          height: auto;
          margin: 0;
        }
      }
    }
  }

  @media only screen and (min-width: 1804px) {
    width: 100%;
    margin-top: 100px;
    padding: 0 115px;
  }
  
  h1 {
    margin-top: 60px;
    font-size: 40px;
    text-align: center;
    @media only screen and (min-width: 1804px) {
      margin-top: 69px;
      font-size: 55px;
    }

    @media only screen and (max-width: 576px) {
      margin-top: 15%;
      font-size: 55px;
    }
  }

  aside > h1 {
    color: #ffffff;
    font-size: 25px;
    font-weight: 600;
    text-align: start;

    @media only screen and (min-width: 1804px) {
      font-size: 35px;
    }
  }

  h1 + p {
    font-size: 17px;
    color: #fb5353;
    font-weight: 400;
    text-align: center;
    opacity: 1;
    @media only screen and (min-width: 1804px) {
      font-size: 25px;
    }
  }

  aside {
    margin-right: 50px;
    height: 429px;
    @media only screen and (min-width: 1804px) {
      height: 346px;
      margin-right: 139px;
    }

    @media (max-width: 576px) {
      margin-right: 0;
    }
  }

  aside + div {
    position: relative;
    margin-top: 5%;
    bottom: 6%;
    @media (max-width: 576px) {
      height: 25%;
    }
  }

  aside > p {
    color: #ffffff;
    font-weight: 600;
    opacity: 0.8;
    text-align: start;
    margin-bottom: 40px;

    margin-top: 22px;
    width: 585px;
    font-size: 14px;
    @media only screen and (min-width: 1804px) {
      margin-top: 41px;
      width: 774px;
      font-size: 19px;
    }
    @media only screen and (max-width: 576px) {
      padding-bottom: 0;
    }
  }

  section {
    padding-bottom: 30px;
    height: 100%;
    width: 100%;
    margin-top: 0px;
    @media only screen and (min-width: 1804px) {
      padding-bottom: 30px;
      height: 100%;
      width: 100%;
    }
  }

  section > div {
    display: flex;
    flex-direction: row;
    height: 399px;
    margin-top: 40px;
    @media only screen and (min-width: 1804px) {
      height: 535px;      
    }
    @media only screen and (max-width: 576px) {
      align-items: center;
      margin-bottom: 0;
    }
  }
`;

export const ExtensionsContainer = styled.div`
  
  div + div {
    position: relative;
    bottom: 355px;
    left: 100px;
    height: 500px;
    @media only screen and (min-width: 1804px) {
      left: 125px;
    }

    @media (max-width: 576px) {
      bottom: 172px;
      left: 30px;
    }
  }

  img {
    width: 280px;
    height: 411px;
    @media only screen and (min-width: 1804px) {
      width: 345px;
      height: 499px;
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
    margin: 0px;
    @media only screen and (min-width: 1804px) {
    margin: 25px 0px;  
    }
  }
`;


export const AcceptButton = styled.button`
  background-color: #4dc30f;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.2s;
  margin-top: 30px;
  margin-bottom: 81px;

  width: 389px;
  height: 49px;
  border-radius: 7px;
  font-size: 19px;

  @media only screen and (min-width: 1804px) {
    width: 516px;
    height: 73px;
    border-radius: 10px;
    font-size: 25px;
  }

  @media only screen and (max-width: 576px) {
    width: 35%;
    font-size: 1rem;
    margin-bottom: 1.3rem !important;
    margin-top: 3rem;
    height: 3rem;
    border-radius: 4px;
    a {
      font-size: 1.1rem;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Break = styled.div`
  height: 7px;
  background-color: #1c1c1c;
  margin-top: 45px;
  margin-bottom: 0px;
  width: 641px;

  @media only screen and (min-width: 1804px) {
    width: 909px;
  }

  @media only screen and (max-width: 576px) {
    width: 71%;
    margin-top: 5%;
    margin-bottom: 0;
    height: 0.6rem;
  }
`;