import styled from 'styled-components';

export const UpsellContainer = styled.div`
  width: 100%;
  max-width: 1596px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.49);
  border-radius: 30px;
  border: 7px solid #79d152;
  background-color: #0e0e0e;
  margin-top: 100px;
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
    strong {
      opacity: 1;
    }
    @media only screen and (max-width: 2000px) {
      font-size: 17px;
    }
  }

  aside {
    height: 346px;
    margin-right: 139px;
    @media only screen and (max-width: 2000px) {
      margin-right: 22px;
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
      width: 622px;
      font-size: 15px;
    }
  }

  section {
    margin-top: 55px;
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
  margin: 45px 0px;
  @media only screen and (max-width: 2000px) {
    width: 641px;
  }
`;