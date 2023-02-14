import "../App.css";
import { Header } from "./header";
import { Movie } from "./movie";
import movieData from "../movieList.json";
const movies = movieData.movies;
export { movies };

export const Main = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {movies.map((element) => {
          return (
            <Movie
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
};
