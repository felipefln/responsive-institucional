import styled from "styled-components";
import { green, light } from "../../styles/colors";

export const Container = styled.header`
  grid-column: 2 / 8;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${light};
  @media (max-width: 769px) {
    grid-column: 1 / -1;
    border-bottom: none;
  }
  .header {
    &__nav-container {
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    &__nav-container ul {
      display: flex;
      flex-wrap: wrap;
    }
    &__nav-container ul li {
      font-size: 1.25rem;
      margin-left: 1.6rem;
      color: ${(props) => (props.theme === "light" ? green : green)};
      text-transform: uppercase;
      text-shadow: ${(props) =>
        props.theme === "light" ? "1px 1px 0px #ffffff": "none"};
      @media (max-width: 769px) {
        color: ${green};
        padding: 0.8rem 0;
        margin-left: 0;
        text-shadow: none;
      }
    }
    &__nav-container ul li:hover {
      color: #7CFC00;
    }
    &__nav-container ul a {
      text-decoration: none;
      @media (max-width: 769px) {
        margin-left: 0;
        width: 100%;
        text-align: center;
      }
    }
    &__logo-container {
      margin: 1rem 0;
      @media (max-width: 769px) {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
  }
`;
