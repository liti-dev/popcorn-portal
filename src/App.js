import { useState } from "react"
import NavBar from "./components/NavBar"
import Box, { tempMovieData } from "./components/Box"
import Logo from "./components/Logo"
import Search from "./components/Search"
import Movie from "./components/Movie"
import Summary from "./components/Summary"
import WatchedList from "./components/WatchedList"

export const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
]

export default function App() {
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)

  return (
    <>
      <NavBar>
        <Logo />
        <Search movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <ul className="list">
            {movies?.map((movie) => (
              <Movie movie={movie} key={movie.imdbID} />
            ))}
          </ul>
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  )
}

export function Main({ children }) {
  return <main className="main">{children}</main>
}
