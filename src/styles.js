import styled from "styled-components";

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  h1 {
    text-align: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
  /* background-color: #f2e596; */
  font-family: Arial, Helvetica, sans-serif;
`;

export const MovieWrapper = styled.div`
  margin: 20px;
  /* 
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: thick solid;
    border-color: ${({ theme }) => theme.mainColor};
  } */

  p {
    text-align: center;

    /* &.cookie-price {
      color: ${({ theme }) => theme.pink};
    } */
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 20%;
  align-items: left;
`;
