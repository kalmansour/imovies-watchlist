// import Title from "../styles";

const Home = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "30px" }}>iMovies List</h1>
      <h4 style={{ textAlign: "center", fontStyle: "italic" }}>
        You will watch these movies
      </h4>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          height: "550px",
          width: "1000px",
          paddingBottom: "50px",
        }}
        src="https://i.pinimg.com/originals/2c/1f/d9/2c1fd959914c4eefa967537c0248b712.jpg"
        alt="imovies-watchlist"
      />
    </>
  );
};

export default Home;
