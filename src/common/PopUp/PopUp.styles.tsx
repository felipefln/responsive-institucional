import styled from 'styled-components';
import { grey, orange } from '../../styles/colors';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .popup {
    &__content {
      max-width: 60%;
      position: relative;
      color: ${(props) =>
        props.theme === "light" ? grey : "white"};
      background: ${(props) =>
        props.theme === "light" ? "white" : orange};
      padding: 4rem 3rem;
      @media (max-width: "768px") {
        padding: 2rem;
        max-width: 88%;
      }
    }
    &__close-icon {
      position: absolute;
      top: -36px;
      left: 0px;
      width: 30px;
      height: 30px;
      border: none;
      border-radius: 25px;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 12px;
      }
    }
  }
`;
