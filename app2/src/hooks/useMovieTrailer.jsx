import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch tailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log("videos",json)
    const trailerFilterData = json.results.filter(
      (video) => video.type == "Trailer"
    );
    //console.log("trailer",trailerFilterData)
    const trailer = trailerFilterData.length
      ? trailerFilterData[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
