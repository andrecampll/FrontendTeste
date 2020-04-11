// 1297x668
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 90px;
  height: 99.7px;
  margin-top: 10px;
  @media (min-width: 1804px) {
    width: 139px;
    height: 154px;
    margin-top: 18px;
  }
`; 

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #101010;
  max-width: 388px;
  max-height: 413px;
  border-radius: 20px;
  margin-top: 25px;
  padding: 17px 0px;
  margin-bottom: 31px;

  @media only screen and (min-width: 1804px) {
    max-width: 622px;
    max-height: 662px;
    border-radius: 35px;
    margin-top: 50px;
    padding: 38px 0px;
    margin-bottom: 31px;

    h1 {
      font-size: 20px !important;
      letter-spacing: 6px !important;
      line-height: 26px !important;
      text-transform: uppercase !important;
      margin-bottom: 32px !important;
    }

  }

  form {
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    text-align: center;
    @media only screen and (min-width: 1804px) { 
      margin-top: 77px;
    }    
  }

  h1 {

    font-size: 13px ;
    letter-spacing: 4px !important;
    line-height: 26px !important;
    text-transform: uppercase !important;
    margin-bottom: 12px !important;
    font-weight: 400px !important;
    color: #cccccc !important;
  }

  h2 {
    color: #ffffff;
    opacity: 0.67;
    font-family: 'Segoe UI', sans-serif !important;
    font-weight: 400;
    letter-spacing: 0.37px;

    line-height: 12px;
    font-size: 10px;
    margin-left: 4px;
    @media only screen and (min-width: 1804px) {
      line-height: 12px;
      font-size: 17px;
      margin-left: 5px;    
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form > div {
    width: 250px;
    height: 44px;
    border-radius: 5px;
    margin-bottom: 12px;
    background-color: #1d1d1d;
    display: flex;
    flex-direction: row;
    
    @media only screen and (min-width: 1804px) {
      width: 404px;
      height: 73px;
      border-radius: 10px;
      margin-bottom: 18px;
    }
  }

  div > svg {
    height: 18px;
    width: 18px;
  }

  button + div {
    background-color: #101010;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 13px;
    
    svg {
      @media only screen and (min-width: 1804px) {
      height: 18px;
      width: 13px;
      }
    }
  }
`; 
export const Divider = styled.div`
  background-image: linear-gradient(89deg, #1054f1 0%, #1edaa7 100%);
  width: 388px;
  height: 4px;
  
  @media only screen and (min-width: 1804px){
    width: 623px;
    height: 7px;
  }
`; 
export const Input = styled.input`
  background-color: #1d1d1d;
  color: #ffffff;

  border-radius: 10px;
  padding: 9px 9px;
  font-size: 12px;
  width: 196px;
  @media only screen and (min-width: 1804px) {
    border-radius: 10px;
    padding: 23px 23px;
    font-size: 20px;
    width: 320px;  
  }
`;
export const Button = styled.button`
  background: linear-gradient(246deg, #206af7 0%, #3380ea 100%);
  font-weight: 700;
  color: #ffffff;
  transition: 0.3s all;

  width: 250px;
  height: 44px;
  border-radius: 5px;
  font-size: 15px;
  letter-spacing: 0.44px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media only screen and (min-width: 1804px) {
    width: 404px;
    height: 73px;
    border-radius: 10px;
    font-size: 22px;
    margin-bottom: 32px;
    margin-top: 35px;
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
    font-weight: 400;
    color: #2e2e2e;

    font-size: 11px;
    height: 46px;

    @media only screen and (min-width: 1804px) {
      height: 53px;
      font-size: 19px;      
    }

    a {
      text-decoration: none;
      font-weight: 700;
      color: #2e2e2e;
    }
  }

  h3 {
  color: #939393;
  font-size: 10px;
    @media only screen and (min-width: 1804px) {
    }
  }

  div {
    display: flex;
    margin: 10px 0px;
    @media only screen and (min-width: 1804px) {
      margin: 41px 0px;
    }
  }

  div > img {
    width: 20px;
    @media only screen and (min-width: 1804px) {
    }
  }
`;