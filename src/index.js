import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import StarRatings from "./components/StarRatings"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRatings maxRating={10} color="#bed558" />
    <Test />
  </React.StrictMode>
)
function Test() {
  const [rating, setMovieRating] = useState(0)
  return (
    <>
      <StarRatings setMovieRating={setMovieRating} maxRating={5} />
      <p>It was rated {rating} stars</p>
    </>
  )
}
