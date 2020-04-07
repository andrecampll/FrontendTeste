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
`; 
export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 622px;
  height: 662px;
  border-radius: 35px;
  background-color: #101010;
  margin-top: 50px;
  padding: 38px 0px;
  margin-bottom: 31px;

  form {
    margin-top: 77px;
    display: flex;
    flex-direction: column;
    text-align: center;
    
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
  }

  button + div {
    background-color: #101010;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 18px;
  }
`; 
export const Divider = styled.div`
  width: 623px;
  height: 7px;
  background-image: linear-gradient(89deg, #1054f1 0%, #1edaa7 100%);
`; 
export const Input = styled.input`
  border-radius: 10px;
  background-color: #1d1d1d;
  color: #ffffff;
  padding: 23px 23px;
  font-size: 20px;
  width: 320px;
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
    font-family: Arial, Helvetica, sans-serif;
    height: 53px;
    a {
      text-decoration: none;
      font-weight: 700;
      color: #2e2e2e;
    }
  }

  h3 {
  color: #939393;
  }

  div {
    display: flex;
    margin: 41px 0px;
  }
`;