import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #fb5353;
  }

  button {
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
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #efefef;
    opacity: 0.65;
    height: 53px;
  }

  h3 {
    text-align: center;
    opacity: 0.5;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const SellContainer = styled.div`
  width: 85%;
  height: 440px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 30px;
  background-color: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  margin-bottom: 15px;
  
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    svg {
      margin-right: 10px;
    }
    p {
      height: 30px;
    }
    a {
      position: relative;
      left: 210px;
    }
  }
  
  p {
    color: #fb5353;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    strong {
      opacity: 1;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 40px;
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
  width: 80%;
  margin-top: 20px;

  section {
    width: 580px;
    height: 385px;
    margin-top: 50px;
    position: relative;
    right: 1.5%;
  }

  h1 {
    color: #ffffff;
    font-size: 34.5px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  h2 {
    color: #3380ea;
    font-size: 20px;
    font-weight: 400;
  }

  p {
    margin-top: 41px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    width: 537px;
    opacity: 0.8;
  }

  div {
    margin-top: 10px;
    height: 724px;
  }

  img + div {
    position: relative;
    bottom: 355px;
    left: 125px;
    height: 500px;
  }

  img {
    width: 280px;
    height: 400px;
  }
`;

export const Break = styled.div`
  width: 909px;
  height: 7px;
  background-color: #1c1c1c;
  margin: 30px 0px;
`;