import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 14px;
    font-weight: 400;
    color: #efefef;
    opacity: 0.65;
  }
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

export const Upsell = styled.div`
  width: 85%;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 30px;
  border: 7px solid #79d152;
  background-color: #0e0e0e;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 115px;

  div {
    margin-top: 0px;
  }
  
  h1 {
    color: #ffffff;
    font-size: 45px;
    font-weight: 600;
    margin-top: 50px;
    text-align: center;
    margin-bottom: 15px;
  }

  h2 {
    color: #ffffff;
    font-size: 23px;
    font-weight: 600;
    text-align: start;
  }

  h1 + p {
    color: #fb5353;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
    strong {
      opacity: 1;
    }
  }

  aside {
    height: 346px;
    margin-right: 139px;
  }

  aside + div {
    position: relative;
    right: 7%;
    margin-top: 6%;
  }

  aside > p {
    margin-top: 41px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
    opacity: 0.8;
    text-align: start;
    margin-bottom: 40px;
  }

  section {
    margin-top: 50px;
    padding-bottom: 30px;
    height: 780px;
  }

  section > div {
    display: flex;
    flex-direction: row;
    height: 600px;
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
  margin-top: 15px;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Break = styled.div`
  width: 730px;
  height: 7px;
  background-color: #1c1c1c;
  margin: 30px 0px;
`;