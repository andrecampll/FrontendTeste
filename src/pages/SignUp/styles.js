// 1297x668
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 139px;
  height: 154px;
  margin-top: 18px;

  @media (max-width: 2000px) {
    width: 90px;
    height: 99.7px;
    margin-top: 10px;
  }
`; 

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 622px;
  max-height: 662px;
  border-radius: 35px;
  background-color: #101010;
  margin-top: 50px;
  padding: 38px 0px;
  margin-bottom: 31px;

  @media only screen and (max-width: 2000px) {
    max-width: 388px;
    max-height: 413px;
    border-radius: 20px;
    margin-top: 25px;
    padding: 17px 0px;
    margin-bottom: 31px;

    h1 {
      font-size: 13px !important;
      letter-spacing: 4px !important;
      line-height: 26px !important;
      text-transform: uppercase !important;
      margin-bottom: 12px !important;
    }

  }

  form {
    margin-top: 77px;
    display: flex;
    flex-direction: column;
    text-align: center;
    @media only screen and (max-width: 2000px) { 
      margin-top: 45px;
    }    
  }

  h1 {
    font-size: 20px;
    font-weight: 400px;
    color: #cccccc;
    letter-spacing: 6px;
    line-height: 26px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }

  h2 {
    color: #ffffff;
    opacity: 0.67;
    font-family: 'Segoe UI', sans-serif !important;
    font-weight: 400;
    letter-spacing: 0.37px;
    line-height: 12px;
    font-size: 17px;
    margin-left: 5px;
    @media only screen and (max-width: 2000px) {
      line-height: 12px;
      font-size: 10px;
      margin-left: 4px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form > div {
    width: 404px;
    height: 73px;
    border-radius: 10px;
    background-color: #1d1d1d;
    display: flex;
    flex-direction: row;
    margin-bottom: 18px;
    
    @media only screen and (max-width: 2000px) {
      width: 250px;
      height: 44px;
      border-radius: 5px;
      margin-bottom: 12px;
    }
  }

  div > svg {
    @media only screen and (max-width: 2000px) {
      height: 18px;
      width: 18px;
    }
  }

  button + div {
    background-color: #101010;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 18px;
    svg {
      @media only screen and (max-width: 2000px) {
      height: 13px;
      width: 13px;
      }
    }
  }
`; 
export const Divider = styled.div`
  width: 623px;
  height: 7px;
  background-image: linear-gradient(89deg, #1054f1 0%, #1edaa7 100%);
  
  @media only screen and (max-width: 2000px){
    width: 388px;
    height: 4px;
  }
`; 
export const Input = styled.input`
  border-radius: 10px;
  background-color: #1d1d1d;
  color: #ffffff;
  padding: 23px 23px;
  font-size: 20px;
  width: 320px;
  @media only screen and (max-width: 2000px) {
    border-radius: 10px;
    padding: 9px 9px;
    font-size: 12px;
    width: 196px; 
  }
`;
export const Button = styled.button`
  width: 404px;
  height: 73px;
  border-radius: 10px;
  background: linear-gradient(246deg, #206af7 0%, #3380ea 100%);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.44px;
  color: #ffffff;
  margin-bottom: 32px;
  margin-top: 35px;
  transition: 0.3s all;

  @media only screen and (max-width: 2000px) {
    width: 250px;
    height: 44px;
    border-radius: 5px;
    font-size: 15px;
    letter-spacing: 0.44px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    font-size: 19px;
    font-weight: 400;
    color: #2e2e2e;
    height: 53px;

    @media only screen and (max-width: 2000px) {
      font-size: 11px;
      height: 46px;
    }

    a {
      text-decoration: none;
      font-weight: 700;
      color: #2e2e2e;
    }
  }

  h3 {
  color: #939393;
    @media only screen and (max-width: 2000px) {
      font-size: 10px;
    }
  }

  div {
    display: flex;
    margin: 41px 0px;
    @media only screen and (max-width: 2000px) {
      margin: 10px 0px;
    }
  }

  div > img {
    @media only screen and (max-width: 2000px) {
      width: 20px;
    }
  }
`;