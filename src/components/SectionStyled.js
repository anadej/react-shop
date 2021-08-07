import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 10px 0 20px 0;
  &:not(:last-child) {
    border-bottom: 2px solid #819ff5;
  }
  .sectionTitle {
    color: ${(props) => props.colors.darkColors.main};
    /* margin: 20px 0 10px 10px; */
    font-size: 16px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .sectionTitle {
      padding-left: 10px;
      text-align: start;
    }
  }
`;
