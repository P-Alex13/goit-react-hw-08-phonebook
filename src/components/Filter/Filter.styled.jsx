import styled from 'styled-components';

export const FilterInputStyled = styled.input`
  height: 30px;
  margin-bottom: 20px;
  padding: 2px 20px;
  width: 100px;

  border: solid 2px #ff0d00;
  border-radius: 6px;
  background-color: inherit;

  outline: none;

  font-size: 15px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #ff0d00;
  &:hover,
  &:focus {
    border: solid 2px #3c322d;
  }

  @media screen and (min-width: 750px) {
    max-width: 250px;
    width: 100%;
  }
`;

export const FilterTitleStyled = styled.h3`
  margin-bottom: 30px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
`;
