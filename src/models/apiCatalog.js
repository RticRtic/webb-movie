

export const apiAction = async (setActionMovies) => {
 
try {
  let url = "https://api.themoviedb.org/3/discover/movie?api_key=435c3f45aa5de36644fb911458c35f2b&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=action&with_watch_monetization_types=flatrate"
  const response = await fetch(url);
  const data = await response.json();
  setActionMovies(data.results);
} catch(error) {
  return[];
}
  
};






