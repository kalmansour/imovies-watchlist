import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.mainColor};
    background-color: ${({ theme }) => theme.backgroundColor}
  }
`;

export const theme = {
  mainColor: "#E50914",
  backgroundColor: "white",
  pink: "#eea9b8",
};

// export const HomeWrapper = styled.div`
//   h1 {
//     text-align: center;
//     font-family: Arial, Helvetica, sans-serif;
//     padding-left: 150px;
//   }

//   h4 {
//     text-align: center;
//     font-family: Arial, Helvetica, sans-serif;
//     font-style: normal;
//     padding-top: 10px;
//   }
//   img {
//     /* display: block;
//     margin-left: auto;
//     margin-right: auto; */
//     width: 700px;
//     height: 200px;
//     /* border: thick solid; */
//     /* border-color: ${({ theme }) => theme.mainColor}; */
//   }
// `;

export const WatchListWrapper = styled.div`
  border: solid;
  border-color: gold;
  border-width: 5px;
  padding: 10px;
  margin: 50px;
  background-color: white;
`;

export const WatchedListWrapper = styled.div`
  border: solid;
  border-color: gold;
  border-width: 5px;
  padding: 10px;
  margin: 50px;
  background-color: white;
`;

export const AddMovieStyled = styled.div`
  border: solid;
  border-color: gold;
  border-width: 5px;
  padding: 10px;
  margin-left: 50px;
  margin-right: 780px;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  color: white h1 {
    text-align: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ItemHeader = styled.h3`
  text-align: center;
  /* background-color: #f2e596; */
  font-family: Arial, Helvetica, sans-serif;

  :hover {
    text-decoration: underline;
  }

  :active {
    color: ${({ theme }) => theme.backgroundColor};
    background-color: ${({ theme }) => theme.mainColor};
  }
`;

export const MovieWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    text-align: center;
  }
`;
//Buttons

// const DeleteButtonStyle = styled.button`
//   font-size: 1em;
//   margin: 1.25em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
//   background-color: ${({ theme }) => theme.backgroundColor};
//   color: ${({ theme }) => theme.mainColor};
// `;

export const ListButtonStyled = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.mainColor};
`;

const WatchedButtonStyled = styled.button`
  background-color: #009dff;
  color: white;
  font-size: 1em;
  margin: 1.25em;
  padding: 0.35em 1em;
  border-radius: 3px;
`;

export const AddMovieButton = styled.button`
  font-size: 1em;
  margin-left: 10px;
  padding: 10px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.mainColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 20%;
  align-items: left;
`;

export default WatchedButtonStyled;
