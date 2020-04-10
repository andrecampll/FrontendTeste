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
  
  h1 {
    margin-top: 69px;
    font-size: 55px;
    text-align: center;
  }

  aside > h1 {
    color: #ffffff;
    font-size: 35px;
    font-weight: 600;
    text-align: start;
  }

  h1 + p {
    color: #fb5353;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
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
  }

  section {
    margin-top: 55px;
    padding-bottom: 30px;
    height: 100%;
    width: 100%;
  }

  section > div {
    display: flex;
    flex-direction: row;
    height: 535px;
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

  &:hover {
    opacity: 0.8;
  }
`;

export const Break = styled.div`
  width: 909px;
  height: 7px;
  background-color: #1c1c1c;
  margin: 45px 0px;
`;