import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 320px;
  background-color: #222c36;
  margin: 10px;
  padding-bottom: 10px;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);

  :hover {
    transform: scale(1.1);
  }

  div {
    height: 150px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h1 {
    font-size: 32px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0 5px;
  flex-direction: column;

  div {
    width: 100%;
    height: 20px;
    margin-top: 5px;
    display: flex;
    flex-direction: row;

    p {
      float: left;
    }

    h4 {
      font-weight: bold;
    }
  }
`;
