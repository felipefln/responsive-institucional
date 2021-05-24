import styled from "styled-components";
import { grey } from "../../styles/colors";

export const Container = styled.footer`
  grid-column: 2 / 8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.theme === "light" ? grey : 'white')};
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  .footer {
    &__logos-container {
      display: flex;
      flex-wrap: wrap;
      flex-basis: 65%;
      justify-content: center;
      margin: 1rem 0;
      img {
        margin-right: 1rem;
      }
      @media (max-width: 768px) {
        margin: 2rem 0;
        flex-basis: 100%;
      }
    }
  }
`;